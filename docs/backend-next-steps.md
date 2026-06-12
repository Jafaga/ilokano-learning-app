# Backend Next Steps

The MVP currently stores progress in browser localStorage. That keeps the project simple and easy to test.

The next major step is connecting Supabase.

## Step 1: Create Supabase Project

Create a Supabase project and copy the project URL and anon key.

Create a file named `.env.local`:

```txt
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Step 2: Run the Schema

Open the Supabase SQL editor and run:

```txt
supabase/schema.sql
```

Then optionally run:

```txt
supabase/seed.sql
```

## Step 3: Connect Auth

Connect the login and signup forms to:

```ts
supabase.auth.signInWithPassword()
supabase.auth.signUp()
```

## Step 4: Move Lessons to Database

Instead of importing from `data/sampleLessons.ts`, fetch units, lessons, questions, and choices from Supabase.

## Step 5: Save User Progress

When a lesson is finished, save the result to the `user_progress` table.
