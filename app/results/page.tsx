"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getLessonById } from "@/data/sampleLessons";
import { MASTERY_SCORE } from "@/lib/progressStorage";

function ResultsContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get("lesson") ?? "";
  const lesson = getLessonById(lessonId);
  const score = Number(searchParams.get("score") ?? "0");
  const correct = searchParams.get("correct") ?? "0";
  const total = searchParams.get("total") ?? "0";
  const xp = searchParams.get("xp") ?? "0";
  const mastered = searchParams.get("mastered") === "true";
  const admin = searchParams.get("admin") === "true";

  const title = admin ? "Admin review complete" : mastered ? "Lesson mastered!" : "Practice needed";
  const icon = admin ? "🛠️" : mastered ? "🏆" : "🌱";

  return (
    <section className="screen centered-screen">
      <div className={`card hero-card elevated-card narrow-card ${mastered || admin ? "mastery-card" : "practice-card"}`}>
        <div className="logo-badge" style={{ margin: "0 auto 20px" }} aria-hidden="true">{icon}</div>
        <p className="eyebrow">{admin ? "Admin Mode" : mastered ? "Mastered" : "Keep Practicing"}</p>
        <h1>{title}</h1>
        <p>
          {admin
            ? "You tested this lesson in admin mode. Your XP and unlock progress were not changed."
            : mastered
              ? "You earned mastery for this lesson, saved your progress, and unlocked the next lesson."
              : `You need ${MASTERY_SCORE}% to master this lesson and unlock the next one. Classic learning move: review it, retry it, then lock it in.`}
        </p>

        <div className="stats-row" style={{ justifyContent: "center" }}>
          <span className="stat-pill">⭐ {xp} XP</span>
          <span className="stat-pill">✅ {correct}/{total}</span>
          <span className="stat-pill">📊 {score}%</span>
        </div>

        <div className="button-stack">
          {!mastered && !admin && lesson ? (
            <Link className="btn btn-primary" href={`/lesson/${lesson.id}`}>Practice again</Link>
          ) : (
            <Link className="btn btn-primary" href="/home">Continue</Link>
          )}
          {lesson ? <Link className="btn btn-secondary" href={`/lesson/${lesson.id}`}>Replay lesson</Link> : null}
          <Link className="btn btn-secondary" href="/home">Course Path</Link>
        </div>
      </div>
    </section>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<section className="screen centered-screen"><div className="card elevated-card narrow-card">Loading results...</div></section>}>
      <ResultsContent />
    </Suspense>
  );
}
