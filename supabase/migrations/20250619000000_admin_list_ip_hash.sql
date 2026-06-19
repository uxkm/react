-- 관리자 댓글 목록에 ip_hash 포함 (원본 IP는 저장하지 않음)

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

notify pgrst, 'reload schema';
