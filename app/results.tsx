import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { StatPill } from "@/components/StatPill";
import { getNextLessonId } from "@/data/sampleLessons";
import { colors } from "@/lib/theme";

export default function ResultsScreen() {
  const params = useLocalSearchParams<{ lessonId: string; score: string; total: string; xp: string }>();
  const score = Number(params.score ?? 0);
  const total = Number(params.total ?? 0);
  const xp = Number(params.xp ?? 0);
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const nextLessonId = params.lessonId ? getNextLessonId(params.lessonId) : undefined;

  return (
    <Screen scroll={false}>
      <View style={styles.center}>
        <Text style={styles.celebration}>🎉</Text>
        <Text style={styles.title}>Lesson complete!</Text>
        <Text style={styles.subtitle}>Nice work. You’re building the foundation one word at a time.</Text>

        <View style={styles.statsRow}>
          <StatPill label="Score" value={`${score}/${total}`} />
          <StatPill label="Accuracy" value={`${percent}%`} />
          <StatPill label="XP" value={`+${xp}`} />
        </View>
      </View>

      <View>
        {nextLessonId ? (
          <PrimaryButton title="Next lesson" onPress={() => router.replace({ pathname: "/lesson/[lessonId]", params: { lessonId: nextLessonId } })} />
        ) : (
          <PrimaryButton title="Back to path" onPress={() => router.replace("/home")} />
        )}
        <PrimaryButton title="Return home" variant="ghost" onPress={() => router.replace("/home")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center"
  },
  celebration: {
    fontSize: 72,
    textAlign: "center"
  },
  title: {
    marginTop: 12,
    fontSize: 36,
    fontWeight: "900",
    textAlign: "center",
    color: colors.forest
  },
  subtitle: {
    marginTop: 10,
    color: colors.muted,
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center"
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 28
  }
});
