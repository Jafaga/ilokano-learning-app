export type ExerciseType =
  | "multiple-choice"
  | "translation"
  | "fill-blank"
  | "listen-and-pick";

export type Exercise = {
  id: string;
  type: ExerciseType;
  prompt: string;
  ilokano?: string;
  english?: string;
  choices?: string[];
  correctAnswer: string;
  explanation: string;
  audioUrl?: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  unitTitle: string;
  title: string;
  description: string;
  xpReward: number;
  order: number;
  lockedByDefault?: boolean;
  exercises: Exercise[];
};

export type Unit = {
  id: string;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
};

export type LessonResult = {
  lessonId: string;
  score: number;
  total: number;
  xpEarned: number;
  completedAt: string;
};

export type ProgressState = {
  xp: number;
  streak: number;
  completedLessonIds: string[];
  lessonResults: LessonResult[];
  lastCompletedDate?: string;
};
