# Ilokano Learning App Project Plan

## Project Overview

This project is a mobile application for learning Ilokano through short interactive lessons. The app uses a gamified structure where users complete lessons, answer questions, earn XP, keep a streak, and unlock new topics.

The purpose of the project is to combine Ilokano language knowledge with computer science. The app supports language learning, cultural preservation, and accessible education for students, families, and community members.

## Target Users

- Complete beginners who want to learn Ilokano
- Heritage learners who grew up hearing Ilokano and want structured practice
- Students taking Ilokano language courses
- Community members who want a simple mobile learning tool

## MVP Goal

The first version should prove that the learning flow works. A user should be able to:

1. Open the app.
2. View the Ilokano course path.
3. Start a lesson.
4. Answer exercises.
5. Receive feedback.
6. Finish the lesson.
7. Earn XP.
8. Save local progress.

## Current MVP Scope

- Expo/React Native app
- Local lesson data
- Home/course path screen
- Lesson screen
- Results screen
- XP and streak logic
- Local progress saving
- Supabase-ready login/signup screens
- Supabase database schema for future backend work

## Out of Scope for First MVP

These are important, but should come after the first working version:

- App Store deployment
- Google Play deployment
- Full audio pronunciation library
- Full contributor dashboard
- AI speech grading
- Payment features
- Social leaderboards

## Development Phases

### Phase 1: Foundation

- Set up Expo project
- Create GitHub repo
- Build folder structure
- Add documentation
- Create sample lesson data

### Phase 2: Core Learning Flow

- Build welcome screen
- Build home/course path screen
- Build lesson screen
- Build answer checking
- Build results screen
- Save local progress

### Phase 3: Backend

- Create Supabase project
- Add database tables
- Add authentication
- Move lesson content from local files into Supabase
- Save progress to the cloud

### Phase 4: Content Expansion

- Build contributor spreadsheet workflow
- Add more lessons
- Add audio files
- Add grammar notes
- Add review lessons

### Phase 5: Polish and Testing

- Improve UI design
- Test on mobile devices
- Fix layout issues
- Add loading states
- Add empty states
- Add error handling

### Phase 6: Release Preparation

- Create app icon
- Create splash screen
- Build app with EAS
- Prepare app store descriptions
- Gather user feedback

## Success Criteria

The MVP is successful when a user can complete at least one full Ilokano lesson from start to finish and have their progress saved.
