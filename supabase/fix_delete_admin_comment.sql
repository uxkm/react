-- 관리자 댓글(password_hash null) 삭제: 관리자 비밀번호로 삭제 가능

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

revoke all on function public.delete_page_comment(uuid, text) from public;
grant execute on function public.delete_page_comment(uuid, text) to anon, authenticated;

notify pgrst, 'reload schema';
