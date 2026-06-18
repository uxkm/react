-- 댓글 스팸 방어: ip_hash 저장, IP rate limit, 최소 제출 시간

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
