import React, { useState } from "react";
import { Alert, View, AppState } from "react-native";
import { router, Stack } from "expo-router";
import { supabase } from "~/lib/supabase";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // sign in
  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
    // redirect to profile
    router.replace("/allocations/main");
  }

  // sign up
  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    else if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="h-full">
        <View className="mx-4 my-4">
          <View>
            <Text>Email</Text>
            <Input
              className="mb-4 mt-2"
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              placeholderTextColor={"#9CA3AF"}
              autoCapitalize={"none"}
            />
          </View>

          <View>
            <Text>Password</Text>
            <Input
              className="mb-3 mt-2"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="#@!1234"
              placeholderTextColor={"#9CA3AF"}
              autoCapitalize={"none"}
            />
          </View>
          <View>
            <Button
              variant="outline"
              className="mt-3 border-green-700"
              disabled={loading}
              onPress={() => signInWithEmail()}
            >
              <Text>Sign in</Text>
            </Button>
          </View>

          <View className="mt-2 flex flex-row items-center justify-center">
            <Text>Don't have an account? </Text>
            <View>
              <Button
                variant="link"
                className=""
                disabled={loading}
                onPress={() => signUpWithEmail()}
              >
                <Text className="font-bold text-red-700">Sign up</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
