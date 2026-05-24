-- Learn Ilokano Supabase Schema
-- Run this in the Supabase SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  xp integer not null default 0,
  streak_count integer not null default 0,
  last_completed_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.units (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  order_index integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid not null references public.units(id) on delete cascade,
  slug text unique not null,
  title text not null,
  description text,
  xp_reward integer not null default 10,
  order_index integer not null,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  exercise_type text not null check (exercise_type in ('multiple-choice', 'translation', 'fill-blank', 'listen-and-pick')),
  prompt text not null,
  ilokano_text text,
  english_text text,
  correct_answer text not null,
  explanation text not null,
  audio_url text,
  order_index integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.exercise_choices (
  id uuid primary key default gen_random_uuid(),
  exercise_id uuid not null references public.exercises(id) on delete cascade,
  choice_text text not null,
  is_correct boolean not null default false,
  order_index integer not null
);

create table if not exists public.user_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  score integer not null,
  total integer not null,
  xp_earned integer not null,
  completed_at timestamptz not null default now(),
  unique(user_id, lesson_id)
);

create table if not exists public.content_contributors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  role text not null default 'contributor',
  created_at timestamptz not null default now()
);

create table if not exists public.content_review_log (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references public.lessons(id) on delete set null,
  exercise_id uuid references public.exercises(id) on delete set null,
  contributor_id uuid references public.content_contributors(id) on delete set null,
  reviewer_name text,
  status text not null check (status in ('draft', 'needs-review', 'approved', 'rejected')),
  notes text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.user_lesson_progress enable row level security;
alter table public.units enable row level security;
alter table public.lessons enable row level security;
alter table public.exercises enable row level security;
alter table public.exercise_choices enable row level security;

create policy "Users can read their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can read their own lesson progress"
  on public.user_lesson_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert their own lesson progress"
  on public.user_lesson_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own lesson progress"
  on public.user_lesson_progress for update
  using (auth.uid() = user_id);

create policy "Published units are readable"
  on public.units for select
  using (true);

create policy "Published lessons are readable"
  on public.lessons for select
  using (is_published = true);

create policy "Exercises are readable when lesson is published"
  on public.exercises for select
  using (
    exists (
      select 1 from public.lessons
      where lessons.id = exercises.lesson_id
      and lessons.is_published = true
    )
  );

create policy "Choices are readable when lesson is published"
  on public.exercise_choices for select
  using (
    exists (
      select 1 from public.exercises
      join public.lessons on lessons.id = exercises.lesson_id
      where exercises.id = exercise_choices.exercise_id
      and lessons.is_published = true
    )
  );

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
