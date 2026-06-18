-- submit_page_comment 구버전 오버로드 제거 후 단일 RPC로 통합
-- (PostgREST가 필터 없는 옛 함수를 호출하는 문제 해결)
--
-- SQL Editor에서 이 파일 전체를 Run 하세요.
-- fix_comment_content_filter.sql / fix_comment_spam_hardening.sql 대신
-- 이 파일 하나만 실행해도 됩니다.

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

do $$
declare
  r record;
begin
  for r in
    select pg_get_function_identity_arguments(p.oid) as args
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.proname = 'submit_page_comment'
  loop
    execute format('drop function public.submit_page_comment(%s)', r.args);
  end loop;
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

revoke all on function public.comment_content_is_blocked(text) from public;
grant execute on function public.comment_content_is_blocked(text) to anon, authenticated;

revoke all on function public.submit_page_comment(text, text, text, text, text, uuid, text, timestamptz) from public;
grant execute on function public.submit_page_comment(text, text, text, text, text, uuid, text, timestamptz) to anon, authenticated;

notify pgrst, 'reload schema';
