import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/lib/theme";

type AnswerButtonProps = {
  answer: string;
  selected: boolean;
  reveal: boolean;
  correctAnswer: string;
  onPress: () => void;
};

export function AnswerButton({ answer, selected, reveal, correctAnswer, onPress }: AnswerButtonProps) {
  const isCorrect = reveal && answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
  const isWrong = reveal && selected && !isCorrect;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={reveal}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        selected && styles.selected,
        isCorrect && styles.correct,
        isWrong && styles.wrong,
        pressed && !reveal && styles.pressed
      ]}
    >
      <Text style={[styles.text, (isCorrect || isWrong) && styles.revealText]}>{answer}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.border,
    padding: 16,
    marginVertical: 6
  },
  selected: {
    borderColor: colors.forest,
    backgroundColor: "#EFF7F1"
  },
  correct: {
    borderColor: colors.success,
    backgroundColor: colors.success
  },
  wrong: {
    borderColor: colors.danger,
    backgroundColor: colors.danger
  },
  pressed: {
    transform: [{ scale: 0.99 }]
  },
  text: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "800"
  },
  revealText: {
    color: "white"
  }
});
