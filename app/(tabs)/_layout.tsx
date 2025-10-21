import { Stack } from "expo-router";

export default function Layout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "Home",
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
    <Stack.Screen
      name="about"
      options={{
        title: "About",
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  </Stack>;
}
  