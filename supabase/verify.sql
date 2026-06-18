-- 설치 확인용 (테이블이 없어도 에러 없음)
-- comments_table / admin_settings_table 이 null 이면 → apply_all.sql 먼저 실행

select
  to_regclass('public.comments') as comments_table,
  to_regclass('public.comment_admin_settings') as admin_settings_table;

select proname, pg_get_function_identity_arguments(oid) as args
from pg_proc
where pronamespace = 'public'::regnamespace
  and proname in (
    'submit_page_comment',
    'delete_page_comment',
    'admin_list_comments',
    'admin_update_comment_status',
    'admin_delete_comment'
  )
order by proname;

-- submit_page_comment 에 ip_hash·form_opened_at 파라미터가 있으면 스팸 보강 마이그레이션 적용됨
select
  case
    when exists (
      select 1
      from pg_proc p
      where p.pronamespace = 'public'::regnamespace
        and p.proname = 'submit_page_comment'
        and pg_get_function_identity_arguments(p.oid) like '%p_ip_hash%'
    )
    then '적용됨 — ip_hash·rate limit·최소 제출 시간'
    else '미적용 — pnpm db:fix-spam 또는 supabase/fix_comment_spam_hardening.sql 실행'
  end as spam_hardening_status;

-- submit_page_comment 오버로드가 1개인지 확인
select
  count(*) as submit_rpc_overload_count,
  string_agg(pg_get_function_identity_arguments(p.oid), ' | ') as signatures
from pg_proc p
where p.pronamespace = 'public'::regnamespace
  and p.proname = 'submit_page_comment';

-- comment_content_is_blocked 함수 및 필터 동작 확인
select
  case
    when to_regprocedure('public.comment_content_is_blocked(text)') is null
      then '미적용 — fix_comment_rpc_consolidate.sql 실행 필요'
    when public.comment_content_is_blocked('이건 씨발 테스트입니다')
      then '적용됨 — 욕설 샘플 차단됨'
    else '함수는 있으나 필터 미동작 — fix_comment_rpc_consolidate.sql 재실행'
  end as content_filter_status;

select
  case
    when to_regclass('public.comment_admin_settings') is null
      then '미설치 — supabase/apply_all.sql 실행 필요'
    else (
      select coalesce(
        (select key from public.comment_admin_settings where key = 'admin_password_hash'),
        '테이블은 있으나 admin_password_hash 없음'
      )
    )
  end as admin_password_status;
