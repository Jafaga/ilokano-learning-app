import AsyncStorage from "@react-native-async-storage/async-storage";
import { LessonResult, ProgressState } from "@/types/lesson";

const PROGRESS_KEY = "learn-ilokano-progress-v1";

export const defaultProgress: ProgressState = {
  xp: 0,
  streak: 0,
  completedLessonIds: [],
  lessonResults: []
};

function toLocalDateKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function yesterdayKey(date = new Date()) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() - 1);
  return toLocalDateKey(copy);
}

export async function loadProgress(): Promise<ProgressState> {
  const raw = await AsyncStorage.getItem(PROGRESS_KEY);
  if (!raw) return defaultProgress;

  try {
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

export async function saveProgress(progress: ProgressState) {
  await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export async function resetProgress() {
  await AsyncStorage.removeItem(PROGRESS_KEY);
}

export async function completeLesson(result: LessonResult): Promise<ProgressState> {
  const current = await loadProgress();
  const alreadyCompleted = current.completedLessonIds.includes(result.lessonId);
  const today = toLocalDateKey();
  const keptResults = current.lessonResults.filter((item) => item.lessonId !== result.lessonId);

  let nextStreak = current.streak;
  if (current.lastCompletedDate !== today) {
    nextStreak = current.lastCompletedDate === yesterdayKey() ? current.streak + 1 : 1;
  }

  const nextProgress: ProgressState = {
    xp: alreadyCompleted ? current.xp : current.xp + result.xpEarned,
    streak: nextStreak,
    completedLessonIds: alreadyCompleted
      ? current.completedLessonIds
      : [...current.completedLessonIds, result.lessonId],
    lessonResults: [...keptResults, result],
    lastCompletedDate: today
  };

  await saveProgress(nextProgress);
  return nextProgress;
}
