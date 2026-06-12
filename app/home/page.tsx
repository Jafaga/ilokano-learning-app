"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { ProgressBar } from "@/components/ProgressBar";
import { StatPill } from "@/components/StatPill";
import { sampleLessons, units } from "@/data/sampleLessons";
import { disableAdminMode, isAdminMode } from "@/lib/adminAuth";
import { loadProgress, resetProgress } from "@/lib/progressStorage";
import type { UserProgress } from "@/types/lesson";

export default function HomePage() {
  const [progress, setProgress] = useState<UserProgress>({ completedLessonIds: [], totalXp: 0, streakCount: 0, lessonAttempts: {} });
  const [adminMode, setAdminMode] = useState(false);
  const [selectedUnitId, setSelectedUnitId] = useState(units[0]?.id ?? "");

  useEffect(() => {
    const savedProgress = loadProgress();
    const admin = isAdminMode();
    setProgress(savedProgress);
    setAdminMode(admin);

    const firstUnmastered = sampleLessons.find((lesson) => !savedProgress.completedLessonIds.includes(lesson.id));
    if (firstUnmastered && !admin) {
      setSelectedUnitId(firstUnmastered.unitId);
    }
  }, []);

  const completionPercent = useMemo(() => {
    if (adminMode) return 100;
    return Math.round((progress.completedLessonIds.length / sampleLessons.length) * 100);
  }, [adminMode, progress.completedLessonIds.length]);

  const selectedUnit = units.find((unit) => unit.id === selectedUnitId) ?? units[0];
  const selectedLessons = sampleLessons.filter((lesson) => lesson.unitId === selectedUnit?.id);
  const nextLesson = adminMode
    ? selectedLessons[0]
    : sampleLessons.find((lesson) => !progress.completedLessonIds.includes(lesson.id));

  function isLessonLocked(lessonOrderIndex: number) {
    if (adminMode) return false;
    const previousLessons = sampleLessons.filter((lesson) => lesson.orderIndex < lessonOrderIndex);
    return previousLessons.some((lesson) => !progress.completedLessonIds.includes(lesson.id));
  }

  function handleReset() {
    resetProgress();
    const freshProgress = loadProgress();
    setProgress(freshProgress);
    setSelectedUnitId(units[0]?.id ?? "");
  }

  function handleExitAdmin() {
    disableAdminMode();
    setAdminMode(false);
  }

  return (
    <section className="screen course-screen">
      <div className="top-bar glass-bar">
        <Link className="brand-lockup" href="/">
          <span className="logo-badge small-logo" aria-hidden="true">🌱</span>
          <span>
            <strong>Learn Ilokano</strong>
            <small>Beginner Path</small>
          </span>
        </Link>
        <div className="top-actions">
          <Link className="stat-pill" href="/curriculum">Curriculum</Link>
          <Link className="stat-pill" href="/login">Admin/Login</Link>
        </div>
      </div>

      {adminMode ? (
        <div className="admin-banner">
          <div>
            <strong>🛠️ Admin mode is on.</strong>
            <span> All lessons are unlocked for testing and content review.</span>
          </div>
          <button className="btn btn-secondary compact-btn" type="button" onClick={handleExitAdmin}>Exit Admin</button>
        </div>
      ) : null}

      <div className="course-dashboard">
        <aside className="course-sidebar card elevated-card">
          <p className="eyebrow">Course Path</p>
          <h1 className="compact-title">Kumusta!</h1>
          <p className="sidebar-copy">
            Pick a unit from the left, then master each milestone with a perfect score to unlock the next one.
          </p>

          <div className="stats-row stacked-stats">
            <StatPill icon="⚡" label={adminMode ? "Admin review" : `${progress.totalXp} XP`} />
            <StatPill icon="🔥" label={adminMode ? "All open" : `${progress.streakCount} day streak`} />
            <StatPill icon="✅" label={adminMode ? `${sampleLessons.length}/${sampleLessons.length} open` : `${progress.completedLessonIds.length}/${sampleLessons.length} mastered`} />
          </div>

          <div className="progress-panel">
            <div className="progress-label-row">
              <span>Overall mastery</span>
              <strong>{completionPercent}%</strong>
            </div>
            <ProgressBar value={completionPercent} />
          </div>

          <nav className="unit-rail" aria-label="Course units">
            {units.map((unit) => {
              const lessonsInUnit = sampleLessons.filter((lesson) => lesson.unitId === unit.id);
              const masteredCount = lessonsInUnit.filter((lesson) => progress.completedLessonIds.includes(lesson.id)).length;
              const active = unit.id === selectedUnit?.id;
              const unitOpen = adminMode || lessonsInUnit.some((lesson) => !isLessonLocked(lesson.orderIndex));

              return (
                <button
                  className={`unit-tab ${active ? "active" : ""}`}
                  key={unit.id}
                  type="button"
                  onClick={() => setSelectedUnitId(unit.id)}
                >
                  <span className="unit-number">{unit.orderIndex}</span>
                  <span className="unit-tab-text">
                    <strong>{unit.title.replace(/^Unit \d+: /, "")}</strong>
                    <small>{adminMode ? "Open" : unitOpen ? `${masteredCount}/${lessonsInUnit.length} mastered` : "Locked soon"}</small>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="course-main card elevated-card">
          <div className="unit-hero-row">
            <div>
              <p className="eyebrow small-eyebrow">{selectedUnit?.stage}</p>
              <h2>{selectedUnit?.title}</h2>
              <p>{selectedUnit?.description}</p>
            </div>
            <div className="unit-badge" aria-hidden="true">{selectedUnit?.orderIndex}</div>
          </div>

          <div className="tag-row compact-tags">
            {selectedUnit?.focus.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>

          <div className="lesson-grid">
            {selectedLessons.map((lesson) => {
              const locked = isLessonLocked(lesson.orderIndex);
              const completed = progress.completedLessonIds.includes(lesson.id);

              return (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  locked={locked}
                  completed={completed}
                  adminMode={adminMode}
                  attempt={progress.lessonAttempts[lesson.id]}
                />
              );
            })}
          </div>
        </main>

        <aside className="course-panel card elevated-card">
          <p className="eyebrow">Focus</p>
          <h2>Less scrolling, more learning.</h2>
          <p>
            The course now works like a dashboard: choose a unit, see only its milestones, and keep your progress in one clean view.
          </p>

          <div className="next-card">
            <span className="next-label">Next milestone</span>
            {nextLesson ? (
              <>
                <strong>{nextLesson.lessonTitle}</strong>
                <small>{nextLesson.unitTitle}</small>
                <Link className="btn btn-primary compact-wide" href={`/lesson/${nextLesson.id}`}>
                  {adminMode ? "Review lesson" : "Continue"}
                </Link>
              </>
            ) : (
              <>
                <strong>Course complete</strong>
                <small>You mastered every current lesson.</small>
                <Link className="btn btn-primary compact-wide" href="/curriculum">Review map</Link>
              </>
            )}
          </div>

          {/* <div className="tip-box">
            <strong>Keyboard tip</strong>
            <span>Use <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd>, then <kbd>Enter</kbd> inside lessons.</span>
          </div> */}

          <button className="btn btn-danger compact-wide" type="button" onClick={handleReset}>Reset demo progress</button>
        </aside>
      </div>
    </section>
  );
}
