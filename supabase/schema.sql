create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  name text not null,
  description text,
  status text not null default 'Planning',
  percent integer not null default 0,
  due_date date,
  next_action text,
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  name text not null,
  due_date date,
  priority text not null default 'Medium',
  done boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  content text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.files (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  name text not null,
  file_type text not null,
  storage_path text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.reminders (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  remind_at timestamptz not null,
  priority text not null default 'Medium',
  sent boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.assistant_messages (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  role text not null,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.tasks enable row level security;
alter table public.notes enable row level security;
alter table public.files enable row level security;
alter table public.reminders enable row level security;
alter table public.assistant_messages enable row level security;

drop policy if exists "projects_select_own" on public.projects;
create policy "projects_select_own" on public.projects for select using (auth.uid() = user_id);

drop policy if exists "projects_insert_own" on public.projects;
create policy "projects_insert_own" on public.projects for insert with check (auth.uid() = user_id);

drop policy if exists "projects_update_own" on public.projects;
create policy "projects_update_own" on public.projects for update using (auth.uid() = user_id);

drop policy if exists "projects_delete_own" on public.projects;
create policy "projects_delete_own" on public.projects for delete using (auth.uid() = user_id);

drop policy if exists "tasks_all_via_project_owner" on public.tasks;
create policy "tasks_all_via_project_owner" on public.tasks for all
using (exists (select 1 from public.projects p where p.id = tasks.project_id and p.user_id = auth.uid()))
with check (exists (select 1 from public.projects p where p.id = tasks.project_id and p.user_id = auth.uid()));

drop policy if exists "notes_all_via_project_owner" on public.notes;
create policy "notes_all_via_project_owner" on public.notes for all
using (exists (select 1 from public.projects p where p.id = notes.project_id and p.user_id = auth.uid()))
with check (exists (select 1 from public.projects p where p.id = notes.project_id and p.user_id = auth.uid()));

drop policy if exists "files_all_via_project_owner" on public.files;
create policy "files_all_via_project_owner" on public.files for all
using (exists (select 1 from public.projects p where p.id = files.project_id and p.user_id = auth.uid()))
with check (exists (select 1 from public.projects p where p.id = files.project_id and p.user_id = auth.uid()));

drop policy if exists "reminders_all_via_project_owner" on public.reminders;
create policy "reminders_all_via_project_owner" on public.reminders for all
using (exists (select 1 from public.projects p where p.id = reminders.project_id and p.user_id = auth.uid()))
with check (exists (select 1 from public.projects p where p.id = reminders.project_id and p.user_id = auth.uid()));

drop policy if exists "assistant_messages_all_via_project_owner" on public.assistant_messages;
create policy "assistant_messages_all_via_project_owner" on public.assistant_messages for all
using (project_id is null or exists (select 1 from public.projects p where p.id = assistant_messages.project_id and p.user_id = auth.uid()))
with check (project_id is null or exists (select 1 from public.projects p where p.id = assistant_messages.project_id and p.user_id = auth.uid()));
