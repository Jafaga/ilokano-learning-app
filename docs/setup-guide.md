# Setup Guide

## 1. Install Node.js

Install the latest stable version of Node.js from the official Node.js website.

## 2. Open the Project

```bash
cd ilokano-learning-app
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the App

```bash
npm run start
```

Then choose one of the following:

- Press `i` for iOS simulator on Mac
- Press `a` for Android emulator
- Press `w` for web preview
- Scan the QR code using Expo Go on your phone

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Ilokano learning app MVP"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## 6. Connect Supabase Later

The app works in guest mode right away. Supabase is optional for the first test.

When ready:

```bash
cp .env.example .env
```

Then edit `.env` and add your Supabase project details.
