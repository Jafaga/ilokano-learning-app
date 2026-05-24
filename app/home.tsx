import { useCallback, useState } from "react";
import { useFocusEffect, router } from "expo-router";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LessonCard } from "@/components/LessonCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { StatPill } from "@/components/StatPill";
import { colors } from "@/lib/theme";
import { lessons, units } from "@/data/sampleLessons";
import { defaultProgress, loadProgress, resetProgress } from "@/lib/progressStorage";
import { ProgressState } from "@/types/lesson";

export default function HomeScreen() {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);

  useFocusEffect(
    useCallback(() => {
      loadProgress().then(setProgress);
    }, [])
  );

  function isLessonLocked(lessonId: string) {
    const lesson = lessons.find((item) => item.id === lessonId);
    if (!lesson?.lockedByDefault) return false;

    const previousLessons = lessons.filter((item) => item.order < lesson.order);
    return previousLessons.some((item) => !progress.completedLessonIds.includes(item.id));
  }

  async function handleReset() {
    Alert.alert("Reset progress?", "This clears XP, streak, and completed lessons on this device.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Reset",
        style: "destructive",
        onPress: async () => {
          await resetProgress();
          setProgress(defaultProgress);
        }
      }
    ]);
  }

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>A Duolingo-style MVP</Text>
        <Text style={styles.title}>Your Ilokano path</Text>
        <Text style={styles.subtitle}>Finish lessons to unlock the next topic. The first unit is ready to test.</Text>
      </View>

      <View style={styles.statsRow}>
        <StatPill label="XP" value={progress.xp} />
        <StatPill label="Streak" value={`${progress.streak}🔥`} />
        <StatPill label="Done" value={progress.completedLessonIds.length} />
      </View>

      {units.map((unit) => (
        <View key={unit.id} style={styles.unitSection}>
          <Text style={styles.unitTitle}>{unit.title}</Text>
          <Text style={styles.unitDescription}>{unit.description}</Text>
          {unit.lessonIds.map((lessonId) => {
            const lesson = lessons.find((item) => item.id === lessonId);
            if (!lesson) return null;

            const locked = isLessonLocked(lesson.id);
            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                completed={progress.completedLessonIds.includes(lesson.id)}
                locked={locked}
                onPress={() => {
                  if (locked) return;
                  router.push({ pathname: "/lesson/[lessonId]", params: { lessonId: lesson.id } });
                }}
              />
            );
          })}
        </View>
      ))}

      <PrimaryButton title="Reset local progress" variant="ghost" onPress={handleReset} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 18
  },
  eyebrow: {
    color: colors.leafDark,
    fontWeight: "900",
    marginBottom: 8
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: colors.forest
  },
  subtitle: {
    marginTop: 8,
    color: colors.muted,
    lineHeight: 22,
    fontSize: 16
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24
  },
  unitSection: {
    marginBottom: 24
  },
  unitTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: colors.text
  },
  unitDescription: {
    color: colors.muted,
    marginTop: 4,
    marginBottom: 12,
    lineHeight: 20
  }
});
