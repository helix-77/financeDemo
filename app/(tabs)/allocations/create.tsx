import { View, Platform } from "react-native";
import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import database, {
  allocationsCollection,
  accountsCollection,
  accountAllocationsCollection,
} from "~/db";
import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import Allocation from "~/model/Allocation";
import Account from "~/model/Account";
import { useAuth } from "~/providers/AuthProvider";

function Create({ accounts }: { accounts: Account[] }) {
  const isPresented = router.canGoBack();
  const [income, setIncome] = useState("");
  const { user } = useAuth();

  const createAllocation = async () => {
    await database.write(async () => {
      await allocationsCollection.create((newAllocation) => {
        newAllocation.income = Number.parseFloat(income);
        newAllocation.userId = user?.id ?? "";
      });
    });

    // await Promise.all(
    //   accounts.map((account) =>
    //     accountAllocationsCollection.create((item) => {
    //       item.account.set(account);
    //       item.allocation.set(allocation);
    //       item.cap = account.cap;
    //       item.amount = (allocation.income * account.cap) / 100;
    //       item.userId = user?.id;
    //     }),
    //   ),
    // );

    setIncome("");
    router.back();
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
              placeholder="$123"
              className="flex-1 bg-secondary"
              value={income}
              onChangeText={setIncome}
            />
          </View>

          {accounts.map((account) => (
            <View
              key={account.id}
              className="flex flex-row items-center justify-between pr-6"
            >
              <View className="flex flex-row rounded-lg p-4">
                <Text className="text-sm">{account.name}</Text>
                <Text className="ml-2 text-sm">{account.cap}%</Text>
              </View>
              <Text>${(Number(income) * (account.cap / 100)).toFixed(2)}</Text>
            </View>
          ))}

          <View className="flex flex-row justify-center">
            <Button
              className="mx-[10vh] mt-4 w-1/2 border-green-700 shadow shadow-foreground/10"
              variant="outline"
              onPress={createAllocation}
            >
              <Text className="text-green-700">Create</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));

export default enhance(Create);
