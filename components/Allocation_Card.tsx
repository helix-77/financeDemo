import React from "react";
import { View } from "react-native";
import { Card, CardTitle } from "./ui/card";
import { Text } from "./ui/text";

const Allocation_Card = () => {
  return (
    <>
      <Card className="mx-3 rounded-3xl border-2 border-gray-700">
        <View className="mx-4 flex flex-row justify-between py-6">
          <Text className="">24 Jan, 2024</Text>
          <Text className="text-4xl text-green-700">&42552</Text>
        </View>
      </Card>
      <Card className="mx-3 rounded-2xl border-t-0 border-gray-900">
        <View className="mx-4 flex flex-row justify-between px-4 py-4">
          <Text>Profit</Text>
          <Text>$123</Text>
        </View>
      </Card>
    </>
  );
};

export default Allocation_Card;
