import { View } from "react-native";
import React from "react";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import Allocation from "~/model/Allocation";
import { withObservables } from "@nozbe/watermelondb/react";
import AccountAllocation from "~/model/AccountAllocation";
import AccountAllocation_Item from "./AccountAllocation_Item";

type AllocationList_Item = {
  allocation: Allocation;
  accountAllocations: AccountAllocation[];
};

const AllocationList_Item = ({
  allocation,
  accountAllocations,
}: AllocationList_Item) => {
  return (
    <>
      <View className="mx-2 my-4 bg-background">
        {/* main card */}
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
        {/* account allocations */}
        <Card className="mx-6 rounded-2xl border-t-0 border-secondary">
          <View className="bg-s mx-4 flex flex-row justify-between px-4 py-4">
            {accountAllocations.map((item) => (
              <AccountAllocation_Item accountAllocation={item} />
            ))}
            {/* <Text>Income</Text>
            <Text>$ {allocation.income}</Text> */}
          </View>
        </Card>
      </View>
    </>
  );
};

const enhance = withObservables(
  ["allocation"],
  ({ allocation }: { allocation: Allocation }) => ({
    allocation,
    accountAllocations: allocation.accountAllocations,
  }),
);
export default enhance(AllocationList_Item);
