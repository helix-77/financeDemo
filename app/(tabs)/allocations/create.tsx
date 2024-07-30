import { View, Platform } from "react-native";
import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import database, { allocationsCollection } from "~/db";
import { useState } from "react";

export default function Create() {
  const isPresented = router.canGoBack();
  const [income, setIncome] = useState("");

  const createAllocation = async () => {
    await database.write(async () => {
      await allocationsCollection.create((newAllocation) => {
        newAllocation.income = Number.parseFloat(income);
        // newAllocation.userId = user?.id;
      });
    });
    router.push("../");
  };

  return (
    <>
      <View className="mx-2 my-2">
        {!isPresented && <Link href="../">Dismiss</Link>}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <View className="rounded-lg p-4">
          <Text className="text-xl font-bold">Create allocation :</Text>
          <View className="my-2 mt-4 flex flex-row items-center gap-2">
            <Text className="text-sm">Income :</Text>
            <Input
              placeholder="$"
              className="flex-1 bg-secondary"
              value={income}
              onChangeText={setIncome}
            />
          </View>
          <Button
            className="mx-[10vh] mt-4 w-1/2 border-green-700 shadow shadow-foreground/10"
            variant="outline"
            onPress={createAllocation}
          >
            <Text className="text-green-700">Create</Text>
          </Button>
        </View>
      </View>
    </>
  );
}
