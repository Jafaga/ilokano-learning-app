# Backend Next Steps

The MVP currently uses local lesson data so the app is easy to test right away. The next major development step is to move lessons and progress into Supabase.

## Step 1: Create Supabase Project

Create a new Supabase project and copy the project URL and anon key into `.env`.

## Step 2: Run SQL Files

Run these in order:

```txt
supabase/schema.sql
supabase/seed.sql
```

## Step 3: Fetch Lessons From Supabase

Create a new file:

```txt
lib/lessonApi.ts
```

Then add functions for:

- fetching units
- fetching lessons by unit
- fetching exercises by lesson
- fetching exercise choices

## Step 4: Save Cloud Progress

After a user completes a lesson, insert or update a row in `user_lesson_progress`.

The local progress system should stay as a backup for guest users.

## Step 5: Contributor/Admin System

Later, create a protected web dashboard where contributors can draft content and reviewers can approve it before publishing.
