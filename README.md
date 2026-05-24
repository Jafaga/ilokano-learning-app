# Learn Ilokano

A Duolingo-style Ilokano learning app MVP built with Expo, React Native, TypeScript, local progress saving, and optional Supabase support.

This starter project is meant to give you a real foundation: screens, lessons, quiz logic, XP, streaks, local progress, GitHub documentation, and a database design for future backend development.

## Current MVP Features

- Welcome screen
- Home/course path screen
- Unit and lesson structure
- Locked/unlocked lessons
- Multiple-choice questions
- Translation and fill-in-the-blank questions
- Answer checking and explanations
- Lesson results screen
- XP calculation
- Local streak tracking
- Local progress saving with AsyncStorage
- Optional Supabase login/signup setup
- Supabase SQL schema and seed files
- Contributor content spreadsheet template

## Recommended Setup

Install Node.js first. Then run:

```bash
npm install
npm run start
```

You can open the app through Expo Go, an iOS simulator, Android emulator, or web preview.

## Safer Expo Setup Option

If dependency versions ever conflict, create a fresh Expo app using Expo's official tool, then copy this project's folders into it:

```bash
npx create-expo-app@latest ilokano-learning-app --template default
cd ilokano-learning-app
npx expo install @react-native-async-storage/async-storage react-native-url-polyfill
npm install @supabase/supabase-js
```

Then copy these folders/files into the fresh app:

```txt
app/
components/
data/
lib/
types/
docs/
supabase/
content/
.env.example
```

## GitHub First Commit

```bash
git init
git add .
git commit -m "Initial Ilokano learning app MVP"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Project Structure

```txt
app/                 App screens and routing
components/          Reusable UI components
data/                Local sample lessons
docs/                Software engineering documentation
lib/                 Theme, storage, Supabase setup
supabase/            SQL schema and seed data
content/             Contributor content template
types/               TypeScript types
```

## Supabase Setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env`.
3. Add your Supabase URL and anon key.
4. Open Supabase SQL Editor.
5. Run `supabase/schema.sql`.
6. Run `supabase/seed.sql`.
7. Restart the Expo server.

The app currently uses local lesson data for the MVP. The Supabase schema is ready for the next backend phase.

## Suggested Next Features

- Fetch lessons from Supabase instead of local data
- Save user progress to Supabase
- Add audio pronunciation files
- Add matching exercises
- Add daily goals
- Add badges and achievements
- Build a contributor/admin dashboard
- Add placement test for users who already know some Ilokano

## Development Philosophy

Build this traditionally and carefully: small working features first, then polish. A real app is not made in one giant jump. It is built screen by screen, lesson by lesson, commit by commit.
