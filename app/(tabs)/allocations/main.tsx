import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Link } from "expo-router";
import Allocation_Card from "~/components/Allocation_Card";

const MainScreen = () => {
  return (
    <>
      <View className="mt-4 mb-10 flex-row justify-center align-middle ">
        <Link href="allocations/create" asChild>
          <Button variant="outline" className=" border-green-700 shadow shadow-foreground/10">
            <Text className=" text-green-700">Create</Text>
          </Button>
        </Link>
      </View>
      {/* card container */}
      <Allocation_Card />
    </>
  );
};

export default MainScreen;
