import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center gap-5 bg-secondary/30 p-6">
      <Button
        variant="outline"
        className="rounded-full px-10 py-3 shadow shadow-foreground/5"
        onPress={() => router.push("(tabs)/allocations/main")}
      >
        <Text>Go to Allocation</Text>
      </Button>
    </View>
  );
}
