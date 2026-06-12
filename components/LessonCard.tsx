import Link from "next/link";
import type { Lesson, LessonAttempt } from "@/types/lesson";

export function LessonCard({
  lesson,
  locked,
  completed,
  adminMode,
  attempt
}: {
  lesson: Lesson;
  locked: boolean;
  completed: boolean;
  adminMode?: boolean;
  attempt?: LessonAttempt;
}) {
  const icon = completed ? "✓" : adminMode ? "🛠" : locked ? "🔒" : "▶";
  const status = completed ? "Mastered" : adminMode ? "Admin Open" : locked ? "Locked" : "Start";
  const bestScore = attempt ? `Best ${attempt.bestScore}%` : "No attempt yet";

  const card = (
    <article className={`lesson-card ${locked ? "locked" : ""} ${completed ? "completed" : ""}`}>
      <div className="lesson-card-top">
        <span className="lesson-icon" aria-hidden="true">{icon}</span>
        <span className="lesson-status">{status}</span>
      </div>
      <div className="lesson-body-copy">
        <p className="eyebrow small-eyebrow">Milestone {lesson.orderIndex}</p>
        <h3>{lesson.lessonTitle}</h3>
        <p>{lesson.description}</p>
      </div>
      <div className="tag-row mini-tags">
        {lesson.skillTags.slice(0, 3).map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="lesson-meta-row">
        <strong>{lesson.xpReward} XP</strong>
        <span>{lesson.questions.length} questions</span>
        <span>{bestScore}</span>
      </div>
    </article>
  );

  if (locked) return card;

  return <Link className="lesson-link" href={`/lesson/${lesson.id}`}>{card}</Link>;
}
