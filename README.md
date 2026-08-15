# Learn Ilokano

Learn Ilokano is a Duolingo-inspired web application that introduces beginners to the Ilokano language through short, interactive lessons. It was created as a full-stack development project using **Next.js**, **React**, **TypeScript**, and browser-based local storage.

The current release is a working prototype with a complete beginner curriculum, mastery-based progression, XP and streak tracking, and a responsive learning interface. Supabase starter files are included for future development of real user accounts, cloud-saved progress, content management, and analytics.

## Live Application

Visit the deployed application:

**[https://jafaga.github.io/ilokano-learning-app/](https://jafaga.github.io/ilokano-learning-app/)**

The application is deployed from the `full-stack-development` branch through GitHub Actions and GitHub Pages. Every push to that branch automatically builds and republishes the site.

## Features

- 10-unit beginner Ilokano curriculum
- 22 lesson milestones
- 10 questions in every lesson
- 220 multiple-choice and translation questions
- Deterministic answer shuffling so the correct answer is not always in the same position
- Keyboard controls during lessons:
  - Press `1`, `2`, or `3` to select a multiple-choice answer
  - Press `Enter` or `Return` to check an answer or continue
- Sound effects for correct and incorrect answers
- Mastery-based progression:
  - Learners must earn a 100% score to master a lesson
  - Mastering a lesson unlocks the next milestone
  - Unsuccessful attempts are recorded but do not unlock the next lesson
- XP and streak tracking after lesson mastery
- Browser-based progress storage with no account required
- Admin testing mode that unlocks every lesson without changing learner progress
- Responsive course dashboard that displays one unit at a time
- Unit navigation rail, lesson cards, progress panels, and focused practice layouts
- Curriculum map for reviewing all units and lesson milestones
- Developer spotlight on the welcome page
- Contributor planning templates and curriculum documentation
- Supabase schema and seed files for future backend development

## Technology Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Supabase](https://supabase.com/) starter integration
- GitHub Actions
- GitHub Pages

## Run the Project Locally

### Prerequisites

- Node.js 22 or a compatible active LTS release
- npm

### Installation

Clone the repository, switch to the full-stack development branch, and install the dependencies:

```bash
git clone https://github.com/Jafaga/ilokano-learning-app.git
cd ilokano-learning-app
git switch full-stack-development
npm install
