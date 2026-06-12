# Project Plan

## Project Overview

Learn Ilokano is a web-based MVP for a Duolingo-inspired Ilokano language learning app. The project combines Ilokano language study and computer science by creating a structured beginner course with quizzes, mastery progression, XP, and review features.

## Current Development Status

The current version is a Next.js app that runs with:

```bash
npm install
npm run dev
```

The MVP now includes 10 units, 20 lesson milestones, and 200 total questions. Each lesson must be mastered with a perfect score before the next lesson unlocks.

## Major Features Completed

- Next.js app structure
- Welcome page
- Course path
- Curriculum map
- Lesson pages
- Results page
- Local progress storage
- XP and streak tracking
- Mastery-based unlocking
- Keyboard controls
- Correct and wrong sound effects
- Admin test login
- Contributor content templates
- Supabase schema starter

## Admin Testing

Admin login is available for development review:

```txt
Username: admin
Password: password
```

Admin mode unlocks every lesson and does not change XP or progress.

## Upcoming Phases

1. Ilokano contributor review.
2. Add real pronunciation audio.
3. Connect Supabase authentication.
4. Move lesson content from local TypeScript data into database tables.
5. Build contributor/admin dashboard.
6. Deploy the web app.
7. Consider mobile packaging after the web MVP is stable.


## UI Update

The course path has been redesigned to reduce long scrolling. The home page now uses a dashboard layout with a unit rail, a focused unit panel, lesson cards, progress statistics, and a next-milestone panel. On smaller screens, the unit rail becomes horizontally scrollable while the lesson cards remain readable.

The lesson screen has also been redesigned into a focused practice layout with a side progress panel, question dots, keyboard reminders, a large phrase card, answer cards, and feedback blocks.
