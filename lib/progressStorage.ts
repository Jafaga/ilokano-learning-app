import type { UserProgress } from "@/types/lesson";

const STORAGE_KEY = "learn-ilokano-progress";

export const MASTERY_SCORE = 100;

export const emptyProgress: UserProgress = {
  completedLessonIds: [],
  totalXp: 0,
  streakCount: 0,
  lessonAttempts: {}
};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().slice(0, 10);
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return emptyProgress;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyProgress;

  try {
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return {
      completedLessonIds: parsed.completedLessonIds ?? [],
      totalXp: parsed.totalXp ?? 0,
      streakCount: parsed.streakCount ?? 0,
      lastCompletedDate: parsed.lastCompletedDate,
      lessonAttempts: parsed.lessonAttempts ?? {}
    };
  } catch {
    return emptyProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function recordLessonAttempt(lessonId: string, scorePercent: number, xpReward: number): UserProgress {
  const current = loadProgress();
  const today = todayKey();
  const currentAttempt = current.lessonAttempts[lessonId];
  const alreadyMastered = current.completedLessonIds.includes(lessonId);
  const masteredNow = scorePercent >= MASTERY_SCORE;

  let nextStreak = current.streakCount;
  if (masteredNow && current.lastCompletedDate !== today && !alreadyMastered) {
    nextStreak = current.lastCompletedDate === yesterdayKey() ? current.streakCount + 1 : 1;
  }

  const nextProgress: UserProgress = {
    completedLessonIds: masteredNow && !alreadyMastered
      ? [...current.completedLessonIds, lessonId]
      : current.completedLessonIds,
    totalXp: masteredNow && !alreadyMastered ? current.totalXp + xpReward : current.totalXp,
    streakCount: nextStreak,
    lastCompletedDate: masteredNow && !alreadyMastered ? today : current.lastCompletedDate,
    lessonAttempts: {
      ...current.lessonAttempts,
      [lessonId]: {
        attempts: (currentAttempt?.attempts ?? 0) + 1,
        bestScore: Math.max(currentAttempt?.bestScore ?? 0, scorePercent),
        mastered: alreadyMastered || masteredNow,
        lastScore: scorePercent,
        lastAttemptDate: today
      }
    }
  };

  saveProgress(nextProgress);
  return nextProgress;
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
