-- 댓글 작성 RPC (Edge Function 없이 anon key로 호출 가능)
-- Supabase SQL Editor에서 20250616000000_comments.sql 실행 후 이 파일도 실행하세요.

create or replace function public.submit_page_comment(
  p_page_path text,
  p_author_name text,
  p_body text,
  p_website text default ''
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

  if v_body ~* 'https?://' then
    insert into public.comments (page_path, author_name, body, status)
    values (p_page_path, v_name, v_body, 'spam')
    returning id into v_id;

    return json_build_object('success', true, 'status', 'spam', 'id', v_id);
  end if;

  insert into public.comments (page_path, author_name, body, status)
  values (p_page_path, v_name, v_body, 'pending')
  returning id into v_id;

  return json_build_object('success', true, 'status', 'pending', 'id', v_id);
end;
$$;

revoke all on function public.submit_page_comment(text, text, text, text) from public;
grant execute on function public.submit_page_comment(text, text, text, text) to anon, authenticated;
