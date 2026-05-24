import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/lib/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.forest },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "900" },
          contentStyle: { backgroundColor: colors.cream }
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ title: "Learn Ilokano" }} />
        <Stack.Screen name="login" options={{ title: "Log In" }} />
        <Stack.Screen name="signup" options={{ title: "Create Account" }} />
        <Stack.Screen name="lesson/[lessonId]" options={{ title: "Lesson" }} />
        <Stack.Screen name="results" options={{ title: "Results" }} />
      </Stack>
    </>
  );
}
