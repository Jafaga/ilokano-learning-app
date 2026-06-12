# Requirements

## Functional Requirements

1. The app shall display a beginner Ilokano course path.
2. The course shall contain 10 curriculum units.
3. Each lesson milestone shall contain about 10 embedded questions.
4. The app shall support multiple-choice questions.
5. The app shall support typed translation questions.
6. The app shall check learner answers and provide explanations.
7. The app shall play a positive sound effect for correct answers.
8. The app shall play a different sound effect for wrong answers.
9. The app shall support keyboard selection for multiple-choice answers using number keys.
10. The app shall support Enter/Return to check an answer or continue.
11. The app shall require 100% mastery before unlocking the next lesson.
12. The app shall save mastered lessons, XP, streak count, and best attempt scores in local browser storage.
13. The app shall provide a test admin login.
14. Admin mode shall unlock every lesson for testing and review.
15. Admin mode shall not modify learner XP or mastery progress.

## Non-Functional Requirements

1. The app should be easy to run with `npm install` and `npm run dev`.
2. The app should be responsive enough to test in a desktop browser or phone browser.
3. The code should be organized by routes, components, data, types, and helper libraries.
4. The curriculum should be stored in a clear format so contributors can review and expand it.
5. The app should be built in a way that can later connect to Supabase.

## Mastery Rule

A learner must answer every question correctly in a lesson to master it. If the learner misses one or more questions, the app records the attempt but does not unlock the next lesson. This keeps progression meaningful and encourages review before moving forward.
