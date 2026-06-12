import Link from "next/link";
import { getLessonsByUnit, sampleLessons, units } from "@/data/sampleLessons";

const principles = [
  "Start with survival phrases learners can use immediately.",
  "Teach vocabulary in themes before expecting long sentences.",
  "Introduce grammar only when it helps a real phrase make sense.",
  "Use spaced review so older words return in later lessons.",
  "Keep each lesson short enough to finish in a few minutes.",
  "Let contributors draft content, then require Ilokano review before publishing."
];

export default function CurriculumPage() {
  return (
    <section className="screen">
      <div className="top-bar">
        <Link className="stat-pill" href="/home">← Course Path</Link>
        <Link className="stat-pill" href="/">Welcome</Link>
      </div>

      <div className="card">
        <p className="eyebrow">Curriculum Design</p>
        <h1>Ilokano learning path</h1>
        <p>
          This map turns the Duolingo-inspired planning into a clear sequence: greetings first, then identity,
          family, counting, colors, time, food, directions, conversation, and checkpoint review.
        </p>
        <div className="stats-row">
          <span className="stat-pill">📚 {units.length} units</span>
          <span className="stat-pill">⭐ {sampleLessons.length} lessons</span>
          <span className="stat-pill">🧩 Short quiz format</span>
        </div>
      </div>

      <div className="card">
        <h2>Design principles</h2>
        <div className="principle-list">
          {principles.map((principle) => (
            <div className="principle-item" key={principle}>✅ {principle}</div>
          ))}
        </div>
      </div>

      <div className="curriculum-grid">
        {units.map((unit) => {
          const lessons = getLessonsByUnit(unit.id);
          return (
            <article className="card curriculum-card" key={unit.id}>
              <p className="eyebrow small-eyebrow">{unit.stage}</p>
              <h2>{unit.title}</h2>
              <p>{unit.description}</p>
              <div className="tag-row">
                {unit.focus.map((focus) => (
                  <span className="tag" key={focus}>{focus}</span>
                ))}
              </div>
              <div className="lesson-list">
                {lessons.map((lesson) => (
                  <Link href={`/lesson/${lesson.id}`} className="mini-lesson" key={lesson.id}>
                    <span>{lesson.orderIndex}. {lesson.lessonTitle}</span>
                    <strong>{lesson.xpReward} XP</strong>
                  </Link>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
