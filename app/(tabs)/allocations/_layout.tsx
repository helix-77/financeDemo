import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="main"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="create" // modal
        options={{
          presentation: "modal",
          headerShown: Platform.OS === "android" ? false : true,
        }}
      />
    </Stack>
  );
}
