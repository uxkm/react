-- 본인 댓글 삭제: owner_token 발급 및 delete RPC

alter table public.comments
  add column if not exists owner_token uuid;

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
  v_owner_token uuid := gen_random_uuid();
  v_body text := trim(p_body);
  v_name text := trim(p_author_name);
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
    owner_token
  )
  values (p_page_path, p_parent_id, v_name, v_body, v_status, v_owner_token)
  returning id into v_id;

  return json_build_object(
    'success', true,
    'status', v_status,
    'id', v_id,
    'owner_token', v_owner_token
  );
end;
$$;

create or replace function public.delete_page_comment(
  p_comment_id uuid,
  p_owner_token uuid
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_deleted_id uuid;
begin
  if p_comment_id is null or p_owner_token is null then
    return json_build_object('error', 'invalid');
  end if;

  delete from public.comments
  where id = p_comment_id
    and owner_token = p_owner_token
  returning id into v_deleted_id;

  if v_deleted_id is null then
    return json_build_object('error', 'forbidden');
  end if;

  return json_build_object('success', true, 'id', v_deleted_id);
end;
$$;

revoke all on function public.submit_page_comment(text, text, text, text, uuid) from public;
grant execute on function public.submit_page_comment(text, text, text, text, uuid) to anon, authenticated;

revoke all on function public.delete_page_comment(uuid, uuid) from public;
grant execute on function public.delete_page_comment(uuid, uuid) to anon, authenticated;
