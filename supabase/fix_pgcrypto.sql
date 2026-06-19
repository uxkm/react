-- pgcrypto(gen_salt/crypt) search_path 수정 — SQL Editor에서 Run

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

create or replace function public.submit_page_comment(
  p_page_path text,
  p_author_name text,
  p_body text,
  p_password text,
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
  v_password text := trim(p_password);
  v_parent record;
  v_status public.comment_status;
begin
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

  if char_length(v_password) < 4 or char_length(v_password) > 32 then
    return json_build_object('error', 'invalid_password');
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
    password_hash
  )
  values (
    p_page_path,
    p_parent_id,
    v_name,
    v_body,
    v_status,
    crypt(v_password, gen_salt('bf'))
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

notify pgrst, 'reload schema';
