# GitHub Workflow

## Branches

Use `main` for stable code and separate branches for new features.

Suggested branches:

```txt
main
dev
feature/welcome-screen
feature/lesson-screen
feature/supabase-auth
feature/progress-tracking
feature/audio-pronunciation
```

## Commit Message Examples

```bash
git commit -m "Add welcome screen"
git commit -m "Create sample Ilokano lesson data"
git commit -m "Build lesson quiz flow"
git commit -m "Save local user progress"
git commit -m "Add Supabase schema"
```

## Suggested GitHub Issues

```txt
#1 Set up Expo project
#2 Create README and project documentation
#3 Build welcome screen
#4 Build home/course path screen
#5 Add sample lessons
#6 Build answer checking
#7 Add results screen
#8 Add XP and streak logic
#9 Add Supabase schema
#10 Add audio pronunciation support
```

## Pull Request Template

```md
## Summary

What did this change add or fix?

## Screens Changed

- [ ] Welcome
- [ ] Home
- [ ] Lesson
- [ ] Results
- [ ] Login/Signup

## Testing

- [ ] App starts with `npm run start`
- [ ] Lesson can be completed
- [ ] XP updates correctly
- [ ] Progress saves after closing/reopening
```
