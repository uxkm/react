-- 대댓글: submit_page_comment에 parent_id 지원 (1단계 답글만 허용)

create or replace function public.submit_page_comment(
  p_page_path text,
  p_author_name text,
  p_body text,
  p_website text default '',
  p_parent_id uuid default null
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
  v_body text := trim(p_body);
  v_name text := trim(p_author_name);
  v_parent record;
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
    insert into public.comments (page_path, parent_id, author_name, body, status)
    values (p_page_path, p_parent_id, v_name, v_body, 'spam')
    returning id into v_id;

    return json_build_object('success', true, 'status', 'spam', 'id', v_id);
  end if;

  insert into public.comments (page_path, parent_id, author_name, body, status)
  values (p_page_path, p_parent_id, v_name, v_body, 'pending')
  returning id into v_id;

  return json_build_object('success', true, 'status', 'pending', 'id', v_id);
end;
$$;

revoke all on function public.submit_page_comment(text, text, text, text, uuid) from public;
grant execute on function public.submit_page_comment(text, text, text, text, uuid) to anon, authenticated;
