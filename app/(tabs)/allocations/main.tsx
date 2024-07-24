import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Link } from "expo-router";

const MainScreen = () => {
  return (
    <View>
      <View className="mt-6 flex-1 flex-row justify-center align-middle ">
        <Link href="allocations/create" asChild>
          <Button variant={"outline"} size={"default"} className="shadow shadow-foreground/5">
            <Text>Present modal</Text>
          </Button>
        </Link>
      </View>
    </View>
  );
};

export default MainScreen;
