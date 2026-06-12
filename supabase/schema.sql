-- Learn Ilokano Supabase Schema
-- Run this later when you are ready to move from local sample data to a real backend.

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text,
  total_xp integer not null default 0,
  streak_count integer not null default 0,
  last_completed_date date,
  created_at timestamptz not null default now()
);

create table if not exists curriculum_stages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  order_index integer not null,
  created_at timestamptz not null default now()
);

create table if not exists units (
  id uuid primary key default gen_random_uuid(),
  stage_id uuid references curriculum_stages(id) on delete set null,
  title text not null,
  description text,
  focus text[] not null default '{}',
  order_index integer not null,
  created_at timestamptz not null default now()
);

create table if not exists lessons (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid not null references units(id) on delete cascade,
  title text not null,
  description text,
  xp_reward integer not null default 10,
  skill_tags text[] not null default '{}',
  order_index integer not null,
  created_at timestamptz not null default now()
);

create type question_type as enum ('multiple-choice', 'translation');

create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references lessons(id) on delete cascade,
  type question_type not null,
  prompt text not null,
  ilokano text,
  correct_answer text not null,
  accepted_answers text[],
  explanation text not null,
  audio_needed boolean not null default false,
  order_index integer not null,
  created_at timestamptz not null default now()
);

create table if not exists choices (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references questions(id) on delete cascade,
  choice_text text not null,
  is_correct boolean not null default false,
  order_index integer not null
);

create table if not exists user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  score integer not null,
  xp_earned integer not null,
  completed_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

alter table profiles enable row level security;
alter table user_progress enable row level security;

create policy "Users can read own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

create policy "Users can read own progress"
  on user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on user_progress for insert
  with check (auth.uid() = user_id);
