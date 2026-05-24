# Requirements

## Functional Requirements

### User Flow

- The user can open the app and see a welcome screen.
- The user can continue as a guest.
- The user can view a course path.
- The user can open an unlocked lesson.
- The user can answer multiple-choice questions.
- The user can type translation or fill-in-the-blank answers.
- The app tells the user if an answer is correct or incorrect.
- The app shows an explanation after each answer.
- The app calculates a lesson score.
- The app awards XP after lesson completion.
- The app saves completed lessons locally.
- The app locks later lessons until earlier lessons are complete.

### Authentication

- The user can access login and signup screens.
- The app can connect to Supabase when environment variables are configured.
- The app can still run in guest mode when Supabase is not configured.

### Content

- Lessons are grouped into units.
- Each lesson has exercises.
- Each exercise has a prompt, correct answer, and explanation.
- Contributors can draft lesson content using a structured spreadsheet.

## Nonfunctional Requirements

- The app should be easy to understand for beginners.
- The app should use a clean and mobile-friendly interface.
- The code should be organized by screen, component, data, type, and utility.
- The app should use TypeScript for safer development.
- The project should be documented well enough for GitHub and class/project review.

## Future Requirements

- Cloud progress saving
- Audio pronunciation
- Review mode
- Matching exercises
- Contributor dashboard
- Admin content approval
- Streak freeze or daily goal system
- App Store and Google Play deployment
