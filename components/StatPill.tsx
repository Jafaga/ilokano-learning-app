import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/lib/theme";

type StatPillProps = {
  label: string;
  value: string | number;
};

export function StatPill({ label, value }: StatPillProps) {
  return (
    <View style={styles.pill}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: "center"
  },
  value: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.forest
  },
  label: {
    marginTop: 2,
    color: colors.muted,
    fontWeight: "700"
  }
});
