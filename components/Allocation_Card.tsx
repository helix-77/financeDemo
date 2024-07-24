import React from "react";
import { View } from "react-native";
import { Card, CardTitle } from "./ui/card";
import { Text } from "./ui/text";

const Allocation_Card = () => {
  return (
    <>
      <Card className="bg-inherit border-2 border-gray-700 rounded-3xl mx-3">
        <View className="flex flex-row justify-between mx-4 py-6">
          <Text className="">24 Jan, 2024</Text>
          <Text className="text-4xl text-green-700">&42552</Text>
        </View>
      </Card>
      <Card className=" bg-inherit border-gray-900 rounded-2xl mx-3 border-t-0">
        <View className="flex flex-row justify-between mx-4 py-4 px-4">
          <Text>Profit</Text>
          <Text>$123</Text>
        </View>
      </Card>
    </>
  );
};

export default Allocation_Card;
