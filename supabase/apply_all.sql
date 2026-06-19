-- UXKM 댓글: Supabase SQL Editor에 이 파일 전체를 붙여넣고 Run
-- (000 스키마 + 004 최종 RPC/관리자 API, 중간 001~003은 004에 포함됨)

-- ========== 000 comments.sql ==========
create type public.comment_status as enum ('pending', 'approved', 'rejected', 'spam');

create table public.comments (
  id          uuid primary key default gen_random_uuid(),
  page_path   text not null,
  parent_id   uuid references public.comments (id) on delete cascade,
  body        text not null check (char_length(body) between 1 and 2000),
  author_name text not null check (char_length(author_name) between 1 and 40),
  user_id     uuid references auth.users (id) on delete set null,
  status      public.comment_status not null default 'pending',
  ip_hash     text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index comments_page_path_created_idx
  on public.comments (page_path, created_at desc);

create index comments_status_idx on public.comments (status);

create index comments_ip_hash_created_idx
  on public.comments (ip_hash, created_at desc);

create table public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.comments enable row level security;
alter table public.admin_users enable row level security;

create policy "approved comments are public"
  on public.comments
  for select
  using (status = 'approved');

create policy "admins read all comments"
  on public.comments
  for select
  using (exists (
    select 1 from public.admin_users where user_id = auth.uid()
  ));

create policy "admins update comments"
  on public.comments
  for update
  using (exists (
    select 1 from public.admin_users where user_id = auth.uid()
  ));

create policy "admins read admin_users"
  on public.admin_users
  for select
  using (auth.uid() = user_id);

-- ========== 004 comment_password_admin.sql ==========
create extension if not exists pgcrypto;

alter table public.comments
  add column if not exists password_hash text;

create table if not exists public.comment_admin_settings (
  key text primary key,
  value text not null
);

create or replace function public.comment_admin_password_ok(p_password text)
returns boolean
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_hash text;
begin
  select value
  into v_hash
  from public.comment_admin_settings
  where key = 'admin_password_hash';

  if v_hash is null then
    return false;
  end if;

  return crypt(p_password, v_hash) = v_hash;
end;
$$;

create or replace function public.comment_content_is_blocked(p_text text)
returns boolean
language plpgsql
immutable
as $$
declare
  v_raw text := coalesce(p_text, '');
  v_norm text;
begin
  if v_raw ~* '<script\b|javascript\s*:|on\w+\s*=|data\s*:\s*text/html' then
    return true;
  end if;

  if v_raw ~ '(.)\1{9,}' then
    return true;
  end if;

  if v_raw ~* '(죽여|죽이|살인|테러|폭탄|강간|성폭행|불법촬영)' then
    return true;
  end if;

  if v_raw ~* '\m[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}\M|\m[0-9]{6}-?[0-9]{7}\M|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}' then
    return true;
  end if;

  if v_raw ~* '(장애인|여성|남성|외국인|이주민|흑인|중국인|일본인)\s*(혐오|비하|멸시|추방)' then
    return true;
  end if;

  v_norm := lower(
    regexp_replace(
      regexp_replace(v_raw, '[\s\.\_\-･·]', '', 'g'),
      '[0-9@$]',
      '',
      'g'
    )
  );

  if v_norm ~* '(씨발|시발|씹|좆|지랄|병신|썅|개새끼|개세끼|미친놈|미친년|또라이|등신|쌍놈|쌍년|엠창|fuck|shit|bitch|asshole|bastard|motherfucker|한남|한녀|김치녀|틀딱|홍어|짱깨|쪽바리)' then
    return true;
  end if;

  return false;
end;
$$;

create or replace function public.submit_page_comment(
  p_page_path text,
  p_author_name text,
  p_body text,
  p_password text,
  p_website text default '',
  p_parent_id uuid default null,
  p_ip_hash text default null,
  p_form_opened_at timestamptz default null
)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_id uuid;
  v_body text := trim(p_body);
  v_name text := trim(p_author_name);
  v_password text := trim(p_password);
  v_ip_hash text := nullif(trim(p_ip_hash), '');
  v_parent record;
  v_status public.comment_status;
  v_recent_count integer;
begin
  if coalesce(trim(p_website), '') <> '' then
    return json_build_object('error', 'spam');
  end if;

  if p_form_opened_at is not null then
    if p_form_opened_at > now() then
      return json_build_object('error', 'spam');
    end if;

    if now() - p_form_opened_at < interval '3 seconds' then
      return json_build_object('error', 'spam');
    end if;
  end if;

  if p_page_path is null or p_page_path !~ '^/' then
    return json_build_object('error', 'invalid');
  end if;

  if char_length(v_name) < 1 or char_length(v_name) > 40 then
    return json_build_object('error', 'invalid');
  end if;

  if char_length(v_body) < 1 or char_length(v_body) > 2000 then
    return json_build_object('error', 'invalid');
  end if;

  if public.comment_content_is_blocked(v_name)
    or public.comment_content_is_blocked(v_body) then
    return json_build_object('error', 'prohibited');
  end if;

  if char_length(v_password) < 4 or char_length(v_password) > 32 then
    return json_build_object('error', 'invalid_password');
  end if;

  if v_ip_hash is not null then
    select count(*)
    into v_recent_count
    from public.comments
    where ip_hash = v_ip_hash
      and created_at >= now() - interval '1 hour';

    if v_recent_count >= 3 then
      return json_build_object('error', 'rate_limit');
    end if;
  end if;

  if p_parent_id is not null then
    select id, page_path, parent_id, status
    into v_parent
    from public.comments
    where id = p_parent_id;

    if not found then
      return json_build_object('error', 'invalid');
    end if;

    if v_parent.page_path <> p_page_path then
      return json_build_object('error', 'invalid');
    end if;

    if v_parent.parent_id is not null then
      return json_build_object('error', 'invalid');
    end if;

    if v_parent.status <> 'approved' then
      return json_build_object('error', 'invalid');
    end if;
  end if;

  if v_body ~* 'https?://' then
    v_status := 'spam';
  else
    v_status := 'pending';
  end if;

  insert into public.comments (
    page_path,
    parent_id,
    author_name,
    body,
    status,
    password_hash,
    ip_hash
  )
  values (
    p_page_path,
    p_parent_id,
    v_name,
    v_body,
    v_status,
    crypt(v_password, gen_salt('bf')),
    v_ip_hash
  )
  returning id into v_id;

  return json_build_object('success', true, 'status', v_status, 'id', v_id);
end;
$$;

create or replace function public.delete_page_comment(
  p_comment_id uuid,
  p_password text
)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_deleted_id uuid;
  v_hash text;
begin
  if p_comment_id is null or trim(p_password) = '' then
    return json_build_object('error', 'invalid');
  end if;

  select password_hash
  into v_hash
  from public.comments
  where id = p_comment_id;

  if not found then
    return json_build_object('error', 'invalid');
  end if;

  if v_hash is null then
    if not public.comment_admin_password_ok(trim(p_password)) then
      return json_build_object('error', 'wrong_password');
    end if;
  elsif crypt(trim(p_password), v_hash) <> v_hash then
    return json_build_object('error', 'wrong_password');
  end if;

  delete from public.comments
  where id = p_comment_id
  returning id into v_deleted_id;

  return json_build_object('success', true, 'id', v_deleted_id);
end;
$$;

create or replace function public.admin_list_comments(
  p_admin_password text,
  p_status text default null,
  p_page_path text default null
)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_rows json;
begin
  if not public.comment_admin_password_ok(p_admin_password) then
    return json_build_object('error', 'forbidden');
  end if;

  select coalesce(json_agg(row_to_json(t)), '[]'::json)
  into v_rows
  from (
    select
      id,
      page_path,
      parent_id,
      author_name,
      body,
      status,
      ip_hash,
      created_at
    from public.comments
    where (p_status is null or status::text = p_status)
      and (p_page_path is null or page_path = p_page_path)
    order by created_at desc
    limit 500
  ) t;

  return json_build_object('success', true, 'comments', v_rows);
end;
$$;

create or replace function public.admin_update_comment_status(
  p_admin_password text,
  p_comment_id uuid,
  p_status text
)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not public.comment_admin_password_ok(p_admin_password) then
    return json_build_object('error', 'forbidden');
  end if;

  if p_status not in ('pending', 'approved', 'rejected', 'spam') then
    return json_build_object('error', 'invalid');
  end if;

  update public.comments
  set status = p_status::public.comment_status,
      updated_at = now()
  where id = p_comment_id;

  if not found then
    return json_build_object('error', 'invalid');
  end if;

  return json_build_object('success', true);
end;
$$;

create or replace function public.admin_delete_comment(
  p_admin_password text,
  p_comment_id uuid
)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not public.comment_admin_password_ok(p_admin_password) then
    return json_build_object('error', 'forbidden');
  end if;

  delete from public.comments where id = p_comment_id;

  if not found then
    return json_build_object('error', 'invalid');
  end if;

  return json_build_object('success', true);
end;
$$;

revoke all on function public.comment_admin_password_ok(text) from public;
grant execute on function public.comment_admin_password_ok(text) to anon, authenticated;

revoke all on function public.submit_page_comment(text, text, text, text, text, uuid) from public;
grant execute on function public.submit_page_comment(text, text, text, text, text, uuid) to anon, authenticated;

revoke all on function public.delete_page_comment(uuid, text) from public;
grant execute on function public.delete_page_comment(uuid, text) to anon, authenticated;

revoke all on function public.admin_list_comments(text, text, text) from public;
grant execute on function public.admin_list_comments(text, text, text) to anon, authenticated;

revoke all on function public.admin_update_comment_status(text, uuid, text) from public;
grant execute on function public.admin_update_comment_status(text, uuid, text) to anon, authenticated;

revoke all on function public.admin_delete_comment(text, uuid) from public;
grant execute on function public.admin_delete_comment(text, uuid) to anon, authenticated;

-- 관리자 비밀번호 (기본: uxkm-admin — 배포 전 변경 권장)
insert into public.comment_admin_settings (key, value)
values ('admin_password_hash', crypt('uxkm-admin', gen_salt('bf')))
on conflict (key) do update set value = excluded.value;

-- 관리자 댓글 등록 (비밀번호 없음, 즉시 승인)
create or replace function public.admin_submit_page_comment(
  p_admin_password text,
  p_page_path text,
  p_author_name text,
  p_body text,
  p_website text default '',
  p_parent_id uuid default null
)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_id uuid;
  v_body text := trim(p_body);
  v_name text := trim(p_author_name);
  v_parent record;
  v_status public.comment_status;
begin
  if not public.comment_admin_password_ok(p_admin_password) then
    return json_build_object('error', 'forbidden');
  end if;

  if coalesce(trim(p_website), '') <> '' then
    return json_build_object('error', 'spam');
  end if;

  if p_page_path is null or p_page_path !~ '^/' then
    return json_build_object('error', 'invalid');
  end if;

  if char_length(v_name) < 1 or char_length(v_name) > 40 then
    return json_build_object('error', 'invalid');
  end if;

  if char_length(v_body) < 1 or char_length(v_body) > 2000 then
    return json_build_object('error', 'invalid');
  end if;

  if public.comment_content_is_blocked(v_name)
    or public.comment_content_is_blocked(v_body) then
    return json_build_object('error', 'prohibited');
  end if;

  if p_parent_id is not null then
    select id, page_path, parent_id, status
    into v_parent
    from public.comments
    where id = p_parent_id;

    if not found then
      return json_build_object('error', 'invalid');
    end if;

    if v_parent.page_path <> p_page_path then
      return json_build_object('error', 'invalid');
    end if;

    if v_parent.parent_id is not null then
      return json_build_object('error', 'invalid');
    end if;

    if v_parent.status <> 'approved' then
      return json_build_object('error', 'invalid');
    end if;
  end if;

  if v_body ~* 'https?://' then
    v_status := 'spam';
  else
    v_status := 'approved';
  end if;

  insert into public.comments (
    page_path,
    parent_id,
    author_name,
    body,
    status,
    password_hash
  )
  values (
    p_page_path,
    p_parent_id,
    v_name,
    v_body,
    v_status,
    null
  )
  returning id into v_id;

  return json_build_object('success', true, 'status', v_status, 'id', v_id);
end;
$$;

revoke all on function public.comment_content_is_blocked(text) from public;
grant execute on function public.comment_content_is_blocked(text) to anon, authenticated;

revoke all on function public.admin_submit_page_comment(text, text, text, text, text, uuid) from public;
grant execute on function public.admin_submit_page_comment(text, text, text, text, text, uuid) to anon, authenticated;

-- PostgREST 스키마 캐시 갱신
notify pgrst, 'reload schema';
