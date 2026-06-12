export type QuestionType = "multiple-choice" | "translation";

export type CurriculumStage =
  | "Foundation"
  | "People"
  | "Description"
  | "Daily Life"
  | "Navigation"
  | "Conversation"
  | "Review";

export type Question = {
  id: string;
  type: QuestionType;
  prompt: string;
  ilokano?: string;
  choices?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  explanation: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  unitTitle: string;
  lessonTitle: string;
  description: string;
  orderIndex: number;
  xpReward: number;
  stage: CurriculumStage;
  skillTags: string[];
  questions: Question[];
};

export type Unit = {
  id: string;
  title: string;
  description: string;
  orderIndex: number;
  stage: CurriculumStage;
  focus: string[];
};

export type LessonAttempt = {
  attempts: number;
  bestScore: number;
  mastered: boolean;
  lastScore?: number;
  lastAttemptDate?: string;
};

export type UserProgress = {
  completedLessonIds: string[];
  totalXp: number;
  streakCount: number;
  lastCompletedDate?: string;
  lessonAttempts: Record<string, LessonAttempt>;
};
