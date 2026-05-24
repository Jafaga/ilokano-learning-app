import { Pressable, StyleSheet, Text, View } from "react-native";
import { Lesson } from "@/types/lesson";
import { colors } from "@/lib/theme";

type LessonCardProps = {
  lesson: Lesson;
  completed: boolean;
  locked: boolean;
  onPress: () => void;
};

export function LessonCard({ lesson, completed, locked, onPress }: LessonCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={locked}
      style={({ pressed }) => [styles.card, completed && styles.completed, locked && styles.locked, pressed && styles.pressed]}
    >
      <View style={styles.iconCircle}>
        <Text style={styles.iconText}>{locked ? "🔒" : completed ? "✓" : lesson.order}</Text>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.description}>{lesson.description}</Text>
        <Text style={styles.xp}>{lesson.xpReward} XP</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2
  },
  completed: {
    borderColor: colors.leaf,
    backgroundColor: "#F5FFF0"
  },
  locked: {
    opacity: 0.55
  },
  pressed: {
    transform: [{ scale: 0.99 }]
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.forest,
    alignItems: "center",
    justifyContent: "center"
  },
  iconText: {
    color: "white",
    fontWeight: "900",
    fontSize: 18
  },
  textWrap: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.text
  },
  description: {
    marginTop: 4,
    color: colors.muted,
    lineHeight: 20
  },
  xp: {
    marginTop: 8,
    fontWeight: "900",
    color: colors.leafDark
  }
});
