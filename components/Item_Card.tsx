import React, { useState } from "react";
import { TouchableOpacity, View, Platform } from "react-native";
import { Card, CardDescription } from "./ui/card";
import { Text } from "./ui/text";
import Account from "~/model/Account";
import { withObservables } from "@nozbe/watermelondb/react";
import { BadgeX, SquarePen } from "lucide-react-native";
import database from "~/db";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Input } from "./ui/input";

function Item_Card({ account }: { account: Account }) {
  const [editedName, setEditedName] = useState(account.name);
  const [editedCap, setEditedCap] = useState(account.cap.toString());
  const [editedTap, setEditedTap] = useState(account.tap.toString());

  const updateAccount = async () => {
    await database.write(async () => {
      await account.update((account) => {
        account.name = editedName;
        account.cap = parseInt(editedCap, 10);
        account.tap = parseInt(editedTap, 10);
      });
    });
  };

  const deleteList = async () => {
    // delete
    await database.write(async () => {
      await account.markAsDeleted();
    });
  };

  return (
    <View className="flex flex-row items-center justify-between">
      <Card className="max-w-m my-3 w-[75vw] px-2">
        <View className="flex flex-row items-center justify-between px-3 py-2">
          <View className="w-[30vw]">
            <Text className="text-2xl">{account.name}</Text>
          </View>
          <View className="flex flex-col items-center pr-3">
            <Text className="text-lg">{account.cap}%</Text>
            <CardDescription>Cap</CardDescription>
          </View>
          <View className="flex flex-col items-center">
            <Text className="text-lg">{account.tap}%</Text>
            <CardDescription>Tap</CardDescription>
          </View>
        </View>
      </Card>

      {/* popover edit button starts */}
      <Popover>
        <PopoverTrigger asChild>
          <TouchableOpacity className="px-2">
            <SquarePen size={20} color={"#15803d"} strokeWidth={2} />
          </TouchableOpacity>
        </PopoverTrigger>
        <PopoverContent
          className="mt-20 w-80"
          side={Platform.OS === "web" ? "bottom" : "top"}
        >
          <Text className="mb-4 text-xl font-medium leading-none">
            Edit Account
          </Text>
          <View className="mb-4">
            <Text className="mb-2">Name:</Text>
            <Input
              value={editedName}
              onChangeText={setEditedName}
              className="rounded border p-2"
            />
          </View>
          <View className="mb-4">
            <Text className="mb-2">Cap (%):</Text>
            <Input
              value={editedCap}
              onChangeText={setEditedCap}
              keyboardType="numeric"
              className="rounded border p-2"
            />
          </View>
          <View className="mb-4">
            <Text className="mb-2">Tap (%):</Text>
            <Input
              value={editedTap}
              onChangeText={setEditedTap}
              keyboardType="numeric"
              className="rounded border p-2"
            />
          </View>
          <Button onPress={updateAccount}>
            <Text>Update</Text>
          </Button>
        </PopoverContent>
      </Popover>

      {/* delete button starts */}
      <TouchableOpacity onPress={deleteList} className="px-2">
        <BadgeX size={20} color={"red"} strokeWidth={2} />
      </TouchableOpacity>
    </View>
  );
}

// as Item_Card takes account as props, we need to observe it. Thus destructuring the props.
const enhance = withObservables(["account"], ({ account }) => ({
  account, // --> account: account.observe(),
}));
export default enhance(Item_Card);
