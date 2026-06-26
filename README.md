# Learn Ilokano — Next.js MVP

Hello there! This is a proect based assignment, a Duolingo inspired, beginner Ilokano learning app built with **Next.js**, **TypeScript**, and local browser storage. The project is designed as a software engineering foundation that can later connect to Supabase for real accounts, admin content editing, audio recordings, and analytics.

## Current MVP Features

- 10-unit beginner Ilokano curriculum
- 20 lesson milestones
- 10 questions embedded in every lesson milestone
- 200 total starter questions
- Multiple-choice and translation practice
- Deterministic answer shuffling so correct answers are not always option 1
- Keyboard shortcuts during lessons
  - Press `1`, `2`, or `3` to choose a multiple-choice answer
  - Press `Enter` / `Return` to check or continue
- Sound effects for correct and wrong answers
- Mastery-based progression
  - A lesson only unlocks the next lesson after a 100% score
  - Failed attempts are recorded, but they do not unlock the next lesson
- XP and streak tracking after mastery
- Admin test login
  - Username: `admin`
  - Password: `password`
  - Unlocks every lesson for testing/content review
  - Does not change XP or learner progress
- Redesigned dashboard UI that shows one unit at a time instead of one long scrolling path
- Developer spotlight section on the welcome page with a replaceable profile image
- Unit rail/sidebar, lesson cards, progress panel, and focused lesson practice layout
- Curriculum Map page
- Contributor/content planning files
- Supabase schema starter files for future backend work

## Run the Project

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Test on Your Phone Browser

Run:

```bash
npm run dev -- --hostname 0.0.0.0
```

Find your Mac's local IP address:

```bash
ipconfig getifaddr en0
```

Then open this on your phone while connected to the same Wi-Fi:

```txt
http://YOUR_IP_ADDRESS:3000
```

## Admin Test Login

Go to:

```txt
http://localhost:3000/login
```

Use:

```txt
Username: admin
Password: password
```

Admin mode is for development and review only. It unlocks every lesson so you can check all content without completing the course path.

## Main Routes

```txt
/                     Welcome page
/home                 Course path
/curriculum           Curriculum map
/login                Admin test login
/lesson/[lessonId]    Lesson practice
/results              Results page
```

## Project Structure

```txt
app/                  Next.js pages and routes
components/           Reusable UI pieces
data/                 Curriculum and sample lesson data
lib/                  Progress, admin mode, answer shuffling, sound effects, Supabase client
types/                TypeScript types
docs/                 Software engineering documentation
content/              Contributor planning templates
supabase/             Future database schema and seed starter
```

## Suggested GitHub Commit

After replacing the older version with this one, commit it like this:

```bash
git add .
git commit -m "Add developer spotlight and shuffled lesson answers"
git push
```

## Next Development Steps

1. Have Ilokano contributors review the lesson wording.
2. Replace `public/developer-photo.svg` with your actual developer photo when ready.
3. Add real voice/audio pronunciation files.
4. Connect Supabase login and user progress.
5. Build a contributor/admin content dashboard.
6. Deploy the web app through Vercel.
7. Later, decide whether to wrap the app as a mobile app or continue as a responsive web app.
=======
