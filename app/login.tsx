import { useState } from "react";
import { router } from "expo-router";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { colors } from "@/lib/theme";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!isSupabaseConfigured || !supabase) {
      Alert.alert("Local mode", "Supabase is not configured yet, so the app will continue as a guest.");
      router.replace("/home");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      Alert.alert("Login failed", error.message);
      return;
    }

    router.replace("/home");
  }

  return (
    <Screen>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Log in once you connect Supabase. Until then, guest mode still works for testing.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" style={styles.input} />
        <Text style={styles.label}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <PrimaryButton title={loading ? "Logging in..." : "Log in"} disabled={loading} onPress={handleLogin} />
        <PrimaryButton title="Continue as guest" variant="ghost" onPress={() => router.replace("/home")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: colors.forest
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 20,
    color: colors.muted,
    lineHeight: 22
  },
  form: {
    backgroundColor: colors.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18
  },
  label: {
    marginBottom: 6,
    marginTop: 10,
    color: colors.text,
    fontWeight: "900"
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    backgroundColor: "white"
  }
});
