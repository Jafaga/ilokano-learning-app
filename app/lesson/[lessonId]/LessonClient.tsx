"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { getLessonById, getPreviousLessons } from "@/data/sampleLessons";
import { isAdminMode } from "@/lib/adminAuth";
import { loadProgress, MASTERY_SCORE, recordLessonAttempt } from "@/lib/progressStorage";
import { playCorrectSound, playWrongSound } from "@/lib/soundEffects";
import { shuffleChoices } from "@/lib/shuffleChoices";

function normalizeAnswer(answer: string): string {
  return answer
    .trim()
    .toLowerCase()
    .replace(/[.!?,]/g, "")
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ");
}

export default function LessonClient() {
  const params = useParams<{ lessonId: string }>();
  const router = useRouter();
  const lesson = useMemo(() => getLessonById(params.lessonId), [params.lessonId]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [adminMode, setAdminMode] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const admin = isAdminMode();
    setAdminMode(admin);

    if (!lesson || admin) {
      setLocked(false);
      return;
    }

    const progress = loadProgress();
    const previousLessons = getPreviousLessons(lesson.id);
    setLocked(previousLessons.some((item) => !progress.completedLessonIds.includes(item.id)));
  }, [lesson]);

  const question = lesson?.questions[questionIndex];
  const displayChoices = useMemo(() => {
    if (!question?.choices) return [];
    return shuffleChoices(question.choices, question.id);
  }, [question]);
  const currentAnswer = question?.type === "translation" ? typedAnswer : selectedAnswer;
  const progressValue = lesson ? Math.round(((questionIndex + 1) / lesson.questions.length) * 100) : 0;
  const liveScore = lesson ? `${correctCount}/${lesson.questions.length}` : "0/0";

  const checkAnswer = useCallback(() => {
    if (!question || !currentAnswer.trim() || isChecked) return;

    let correct = false;
    if (question.type === "translation") {
      const accepted = question.acceptedAnswers ?? [question.correctAnswer];
      correct = accepted.map(normalizeAnswer).includes(normalizeAnswer(currentAnswer));
    } else {
      correct = currentAnswer === question.correctAnswer;
    }

    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) {
      setCorrectCount((count) => count + 1);
      playCorrectSound();
    } else {
      playWrongSound();
    }
  }, [currentAnswer, isChecked, question]);

  const goNext = useCallback(() => {
    if (!lesson) return;

    const isLastQuestion = questionIndex === lesson.questions.length - 1;

    if (isLastQuestion) {
      const scorePercent = Math.round((correctCount / lesson.questions.length) * 100);
      const mastered = scorePercent >= MASTERY_SCORE;
      const xpEarned = mastered && !adminMode ? lesson.xpReward : 0;

      if (!adminMode) {
        recordLessonAttempt(lesson.id, scorePercent, lesson.xpReward);
      }

      router.push(`/results?lesson=${lesson.id}&score=${scorePercent}&correct=${correctCount}&total=${lesson.questions.length}&xp=${xpEarned}&mastered=${mastered}&admin=${adminMode}`);
      return;
    }

    setQuestionIndex((index) => index + 1);
    setSelectedAnswer("");
    setTypedAnswer("");
    setIsChecked(false);
    setIsCorrect(false);
  }, [adminMode, correctCount, lesson, questionIndex, router]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!question) return;

      if (event.key === "Enter") {
        event.preventDefault();
        if (isChecked) {
          goNext();
        } else if (currentAnswer.trim()) {
          checkAnswer();
        }
        return;
      }

      if (question.type === "multiple-choice" && !isChecked && /^[1-9]$/.test(event.key)) {
        const choiceIndex = Number(event.key) - 1;
        const choice = displayChoices[choiceIndex];
        if (choice) {
          setSelectedAnswer(choice);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [checkAnswer, currentAnswer, displayChoices, goNext, isChecked, question]);

  if (!lesson || !question) {
    return (
      <section className="screen centered-screen">
        <div className="card hero-card narrow-card">
          <h1>Lesson not found</h1>
          <p>This lesson does not exist yet.</p>
          <Link className="btn btn-primary" href="/home">Return home</Link>
        </div>
      </section>
    );
  }

  if (locked) {
    return (
      <section className="screen centered-screen">
        <div className="top-bar glass-bar">
          <Link className="stat-pill" href="/home">← Course Path</Link>
          <span className="stat-pill">🔒 Locked</span>
        </div>
        <div className="card hero-card narrow-card">
          <div className="logo-badge" style={{ margin: "0 auto 20px" }} aria-hidden="true">🔒</div>
          <p className="eyebrow">Mastery Required</p>
          <h1>This lesson is locked.</h1>
          <p>You need to master every earlier lesson with a {MASTERY_SCORE}% score before this one opens.</p>
          <Link className="btn btn-primary" href="/home">Return to Course Path</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="screen lesson-screen">
      <div className="top-bar glass-bar">
        <Link className="stat-pill" href="/home">← Exit lesson</Link>
        <span className="stat-pill">Question {questionIndex + 1} of {lesson.questions.length}</span>
      </div>

      {adminMode ? <div className="admin-banner compact-banner">🛠️ Admin testing mode: this lesson is unlocked and will not change XP.</div> : null}

      <div className="lesson-workspace">
        <aside className="lesson-side-panel card elevated-card">
          <p className="eyebrow small-eyebrow">{lesson.unitTitle}</p>
          <h2>{lesson.lessonTitle}</h2>
          <p>{lesson.description}</p>

          <div className="progress-panel lesson-progress-panel">
            <div className="progress-label-row">
              <span>Lesson progress</span>
              <strong>{progressValue}%</strong>
            </div>
            <ProgressBar value={progressValue} />
          </div>

          <div className="question-dots" aria-label="Question progress">
            {lesson.questions.map((item, index) => (
              <span
                className={`question-dot ${index < questionIndex ? "done" : ""} ${index === questionIndex ? "active" : ""}`}
                key={item.id}
              />
            ))}
          </div>

          <div className="tip-box">
            <strong>Mastery rule</strong>
            <span>You need {MASTERY_SCORE}% to unlock the next milestone. Review is part of the grind.</span>
          </div>

          <div className="keyboard-help vertical-help">
            <span>Keyboard</span>
            {question.type === "multiple-choice" ? <span><kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> to pick</span> : <span>Type your answer</span>}
            <span><kbd>Enter</kbd> to {isChecked ? "continue" : "check"}</span>
          </div>
        </aside>

        <main className="question-panel card elevated-card">
          <div className="question-topline">
            <span className="lesson-status">Score {liveScore}</span>
            <span className="lesson-status">{question.type === "translation" ? "Typing" : "Multiple choice"}</span>
          </div>

          <p className="eyebrow">Question {questionIndex + 1}</p>
          <h2>{question.prompt}</h2>
          {question.ilokano ? <div className="phrase-card">{question.ilokano}</div> : null}

          {question.type === "multiple-choice" ? (
            <div className="answer-grid polished-answer-grid">
              {displayChoices.map((choice, index) => {
                const selected = selectedAnswer === choice;
                const correctClass = isChecked && choice === question.correctAnswer ? "correct" : "";
                const wrongClass = isChecked && selected && choice !== question.correctAnswer ? "wrong" : "";

                return (
                  <button
                    key={`${question.id}-${choice}`}
                    className={`btn answer-btn ${selected ? "selected" : ""} ${correctClass} ${wrongClass}`}
                    type="button"
                    onClick={() => !isChecked && setSelectedAnswer(choice)}
                  >
                    <span className="keyboard-key">{index + 1}</span>
                    <span>{choice}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <input
              className="input large-input"
              value={typedAnswer}
              onChange={(event) => setTypedAnswer(event.target.value)}
              placeholder="Type your answer..."
              disabled={isChecked}
              autoFocus
            />
          )}

          {isChecked ? (
            <div className={`feedback ${isCorrect ? "correct" : "wrong"}`}>
              <strong>{isCorrect ? "Correct!" : `Not quite. Correct answer: ${question.correctAnswer}`}</strong>
              <span>{question.explanation}</span>
            </div>
          ) : null}

          <div className="footer-actions inline-actions">
            {!isChecked ? (
              <button className="btn btn-primary" type="button" disabled={!currentAnswer.trim()} onClick={checkAnswer}>Check answer</button>
            ) : (
              <button className="btn btn-primary" type="button" onClick={goNext}>
                {questionIndex === lesson.questions.length - 1 ? "Finish lesson" : "Continue"}
              </button>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
