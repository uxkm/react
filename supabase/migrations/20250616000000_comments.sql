-- UXKM page comments (Supabase)
-- Apply: supabase db push  OR  SQL Editor에서 실행

create type public.comment_status as enum ('pending', 'approved', 'rejected', 'spam');

create table public.comments (
  id          uuid primary key default gen_random_uuid(),
  page_path   text not null,
  parent_id   uuid references public.comments (id) on delete cascade,
  body        text not null check (char_length(body) between 1 and 2000),
  author_name text not null check (char_length(author_name) between 1 and 40),
  user_id     uuid references auth.users (id) on delete set null,
  status      public.comment_status not null default 'pending',
  ip_hash     text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index comments_page_path_created_idx
  on public.comments (page_path, created_at desc);

create index comments_status_idx on public.comments (status);

create index comments_ip_hash_created_idx
  on public.comments (ip_hash, created_at desc);

create table public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.comments enable row level security;
alter table public.admin_users enable row level security;

-- 승인된 댓글만 공개 조회
create policy "approved comments are public"
  on public.comments
  for select
  using (status = 'approved');

-- 관리자: 전체 조회·상태 변경
create policy "admins read all comments"
  on public.comments
  for select
  using (exists (
    select 1 from public.admin_users where user_id = auth.uid()
  ));

create policy "admins update comments"
  on public.comments
  for update
  using (exists (
    select 1 from public.admin_users where user_id = auth.uid()
  ));

create policy "admins read admin_users"
  on public.admin_users
  for select
  using (auth.uid() = user_id);
