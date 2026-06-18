-- 댓글 가이드라인 기반 콘텐츠 필터 (KISO/방통위/공공기관 기준 요지 반영) — SQL Editor에서 Run
-- ※ 반드시 이 파일 전체(1행~끝)를 선택한 뒤 Run 하세요. 맨 아래 GRANT만 실행하면 필터가 적용되지 않습니다.

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

-- submit_page_comment 에 필터 추가
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

  if public.comment_content_is_blocked(v_name)
    or public.comment_content_is_blocked(v_body) then
    return json_build_object('error', 'prohibited');
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

-- admin_submit_page_comment 에 필터 추가
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

revoke all on function public.submit_page_comment(text, text, text, text, text, uuid) from public;
grant execute on function public.submit_page_comment(text, text, text, text, text, uuid) to anon, authenticated;

revoke all on function public.admin_submit_page_comment(text, text, text, text, text, uuid) from public;
grant execute on function public.admin_submit_page_comment(text, text, text, text, text, uuid) to anon, authenticated;

notify pgrst, 'reload schema';
