import { View } from "react-native";
import React from "react";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import Allocation from "~/model/Allocation";

const AllocationList_Item = ({ allocation }: { allocation: Allocation }) => {
  return (
    <>
      <View className="mx-2 my-4">
        <Card className="mx-3 rounded-3xl bg-secondary">
          <View className="mx-6 flex flex-row justify-between py-6">
            <Text className="">
              {allocation.createdAt.toLocaleDateString()}
            </Text>
            <Text className="text-4xl text-green-700">
              ${allocation.income}
            </Text>
          </View>
        </Card>
        <Card className="mx-6 rounded-2xl border-t-0 border-secondary">
          <View className="mx-4 flex flex-row justify-between px-4 py-4">
            <Text>Income</Text>
            <Text>$ {allocation.income}</Text>
          </View>
        </Card>
      </View>
    </>
  );
};

export default AllocationList_Item;
