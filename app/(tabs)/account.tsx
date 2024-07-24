import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import List_itemCard from "~/components/List_itemCard";
import Item_Card from "~/components/Item_Card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card } from "~/components/ui/card";

const Account = () => {
  const [name, setName] = React.useState("");
  const [cap, setCap] = React.useState("");
  const [tap, setTap] = React.useState("");

  const addItem = () => {
    console.log("name", name);
    console.log("cap", cap);
    console.log("tap", tap);
    // sync with watermelondb
  };

  return (
    <>
      <View className="justify-center align-middle mt-3 mx-5 ">
        <List_itemCard />
      </View>
      <View className="flex-row justify-between mx-9 mt-10">
        <Input
          placeholder="Name..."
          value={name}
          onChangeText={(text) => setName(text)}
          aria-labelledbyledBy="inputLabel"
          aria-errormessage="inputError"
          className="w-1/2"
        />
        <Input
          placeholder="Cap%"
          value={cap}
          onChangeText={(text) => setCap(text)}
          aria-labelledbyledBy="inputLabel"
          aria-errormessage="inputError"
          className="w-1/5"
        />
        <Input
          placeholder="Tap%"
          value={tap}
          onChangeText={(text) => setTap(text)}
          aria-labelledbyledBy="inputLabel"
          aria-errormessage="inputError"
          className="w-1/5"
        />
      </View>
      <View className="mx-32 mt-6">
        <Button variant="outline" className="border-green-800" onPress={addItem}>
          <Text className="text-green-700">Add Account</Text>
        </Button>
      </View>
    </>
  );
};

export default Account;
