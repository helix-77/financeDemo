import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function Screen() {
  return (
    <View className=" flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Button
        variant="outline"
        className="py-3 px-10 rounded-full shadow shadow-foreground/5"
        onPress={() => router.push("(tabs)/allocations/main")}
      >
        <Text>Go to Allocation</Text>
      </Button>
    </View>
  );
}
