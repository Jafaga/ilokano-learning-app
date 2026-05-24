import { useMemo, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AnswerButton } from "@/components/AnswerButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProgressBar } from "@/components/ProgressBar";
import { Screen } from "@/components/Screen";
import { TextInputAnswer } from "@/components/TextInputAnswer";
import { getLessonById } from "@/data/sampleLessons";
import { completeLesson } from "@/lib/progressStorage";
import { colors } from "@/lib/theme";

function normalizeAnswer(value: string) {
  return value.trim().toLowerCase().replace(/[.!?]/g, "");
}

export default function LessonScreen() {
  const params = useLocalSearchParams<{ lessonId: string }>();
  const lesson = useMemo(() => getLessonById(params.lessonId), [params.lessonId]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [textAnswer, setTextAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  if (!lesson) {
    return (
      <Screen>
        <Text style={styles.title}>Lesson not found</Text>
        <PrimaryButton title="Back to home" onPress={() => router.replace("/home")} />
      </Screen>
    );
  }

  const exercise = lesson.exercises[questionIndex];
  const isTextQuestion = exercise.type === "translation" || exercise.type === "fill-blank";
  const answerToCheck = isTextQuestion ? textAnswer : selectedAnswer;
  const isCorrect = normalizeAnswer(answerToCheck) === normalizeAnswer(exercise.correctAnswer);
  const progressValue = (questionIndex + (revealed ? 1 : 0)) / lesson.exercises.length;

  function handleCheck() {
    if (!answerToCheck.trim()) return;
    if (!revealed && isCorrect) {
      setScore((current) => current + 1);
    }
    setRevealed(true);
  }

  async function handleContinue() {
    const isLastQuestion = questionIndex === lesson.exercises.length - 1;

    if (!isLastQuestion) {
      setQuestionIndex((current) => current + 1);
      setSelectedAnswer("");
      setTextAnswer("");
      setRevealed(false);
      return;
    }

    const finalScore = score + (isCorrect && revealed ? 0 : isCorrect ? 1 : 0);
    const xpEarned = Math.round((finalScore / lesson.exercises.length) * lesson.xpReward);

    await completeLesson({
      lessonId: lesson.id,
      score: finalScore,
      total: lesson.exercises.length,
      xpEarned,
      completedAt: new Date().toISOString()
    });

    router.replace({
      pathname: "/results",
      params: {
        lessonId: lesson.id,
        score: String(finalScore),
        total: String(lesson.exercises.length),
        xp: String(xpEarned)
      }
    });
  }

  return (
    <Screen>
      <View style={styles.topRow}>
        <Text style={styles.unit}>{lesson.unitTitle}</Text>
        <Text style={styles.counter}>{questionIndex + 1}/{lesson.exercises.length}</Text>
      </View>
      <ProgressBar value={progressValue} />

      <View style={styles.questionCard}>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        <Text style={styles.prompt}>{exercise.prompt}</Text>

        {exercise.choices?.length ? (
          <View style={styles.answersWrap}>
            {exercise.choices.map((choice) => (
              <AnswerButton
                key={choice}
                answer={choice}
                selected={selectedAnswer === choice}
                reveal={revealed}
                correctAnswer={exercise.correctAnswer}
                onPress={() => setSelectedAnswer(choice)}
              />
            ))}
          </View>
        ) : (
          <TextInputAnswer value={textAnswer} onChangeText={setTextAnswer} editable={!revealed} />
        )}
      </View>

      {revealed && (
        <View style={[styles.feedback, isCorrect ? styles.correctBox : styles.wrongBox]}>
          <Text style={styles.feedbackTitle}>{isCorrect ? "Correct!" : "Almost — review this one."}</Text>
          <Text style={styles.feedbackText}>{exercise.explanation}</Text>
          {!isCorrect && <Text style={styles.correctAnswer}>Correct answer: {exercise.correctAnswer}</Text>}
        </View>
      )}

      <PrimaryButton
        title={revealed ? "Continue" : "Check answer"}
        disabled={!answerToCheck.trim()}
        onPress={revealed ? handleContinue : handleCheck}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  unit: {
    color: colors.leafDark,
    fontWeight: "900"
  },
  counter: {
    color: colors.muted,
    fontWeight: "900"
  },
  questionCard: {
    backgroundColor: colors.card,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginTop: 24,
    marginBottom: 16
  },
  lessonTitle: {
    color: colors.muted,
    fontWeight: "900",
    marginBottom: 10
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: colors.forest
  },
  prompt: {
    fontSize: 26,
    fontWeight: "900",
    lineHeight: 34,
    color: colors.text,
    marginBottom: 18
  },
  answersWrap: {
    marginTop: 4
  },
  feedback: {
    borderRadius: 22,
    padding: 16,
    marginBottom: 12
  },
  correctBox: {
    backgroundColor: "#E8F8E3",
    borderColor: colors.success,
    borderWidth: 1
  },
  wrongBox: {
    backgroundColor: "#FEE2E2",
    borderColor: colors.danger,
    borderWidth: 1
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.text
  },
  feedbackText: {
    marginTop: 6,
    color: colors.text,
    lineHeight: 21
  },
  correctAnswer: {
    marginTop: 8,
    fontWeight: "900",
    color: colors.text
  }
});
