import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "@/components/Screen";
import { PrimaryButton } from "@/components/PrimaryButton";
import { colors } from "@/lib/theme";

export default function WelcomeScreen() {
  return (
    <Screen scroll={false}>
      <View style={styles.hero}>
        <Text style={styles.badge}>Ilokano Language Learning</Text>
        <Text style={styles.title}>Learn Ilokano one lesson at a time.</Text>
        <Text style={styles.subtitle}>
          Practice greetings, family words, food phrases, and everyday conversation through short interactive lessons.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Start your path</Text>
        <Text style={styles.cardText}>This starter app already includes sample lessons, XP, streak logic, and progress saving.</Text>
        <PrimaryButton title="Continue as Guest" onPress={() => router.push("/home")} />
        <PrimaryButton title="Log In" variant="secondary" onPress={() => router.push("/login")} />
        <PrimaryButton title="Create Account" variant="ghost" onPress={() => router.push("/signup")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    justifyContent: "center"
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.forest,
    color: "white",
    fontWeight: "900",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginBottom: 16
  },
  title: {
    fontSize: 42,
    lineHeight: 48,
    fontWeight: "900",
    color: colors.forest
  },
  subtitle: {
    marginTop: 14,
    fontSize: 17,
    lineHeight: 25,
    color: colors.muted
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.text
  },
  cardText: {
    marginTop: 8,
    marginBottom: 10,
    color: colors.muted,
    lineHeight: 22
  }
});
