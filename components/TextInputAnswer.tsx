import { StyleSheet, TextInput } from "react-native";
import { colors } from "@/lib/theme";

type TextInputAnswerProps = {
  value: string;
  onChangeText: (value: string) => void;
  editable?: boolean;
};

export function TextInputAnswer({ value, onChangeText, editable = true }: TextInputAnswerProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      editable={editable}
      placeholder="Type your answer here"
      placeholderTextColor="#9CA3AF"
      autoCapitalize="none"
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    minHeight: 56,
    color: colors.text
  }
});
