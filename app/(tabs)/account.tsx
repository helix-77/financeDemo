import { Alert, View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import List_itemCard from "~/components/List_itemCard";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import database, { accountsCollection } from "~/db";
import { useAuth } from "~/providers/AuthProvider";

const AccountScreen = () => {
  const [name, setName] = React.useState("");
  const [cap, setCap] = React.useState("");
  const [tap, setTap] = React.useState("");

  const { user } = useAuth();

  const addItem = async () => {
    if (name === "" || cap === "" || tap === "") {
      Alert.alert("Please fill all the fields");
      return;
    }

    // create new post
    await database.write(async () => {
      await accountsCollection.create((account) => {
        account.name = name;
        account.cap = Number(cap);
        account.tap = Number(tap);
        account.userId = user?.id ?? "";
      });
    });

    setName("");
    setCap("");
    setTap("");
  };

  // const testDB = async () => {
  //   //create new post
  //   await database.write(async () => {
  //     await accountsCollection.create((account) => {
  //       account.name = name;
  //       account.cap = Number(cap);
  //       account.tap = Number(tap);
  //     });
  //   });

  //   // delete
  //   await database.write(async () => {
  //     await accountsCollection.query().markAsDeleted(); // will mark to delete from remote server as well
  //     //  await accountsCollection.query().destroyAllPermanently();
  //   });

  //   // update
  //   await database.write(async () => {
  //     const accounts = await accountsCollection.query().fetch();
  //     await accounts[0].update((account) => {
  //       account.name = "updated";
  //     });
  //   });

  //   // fetch account
  //   const allAccounts = await accountsCollection.query().fetch();
  //   console.log(allAccounts);
  // };

  return (
    <>
      <View className="w-full px-4">
        <List_itemCard />
      </View>
      <View className="mx-9 mt-3 flex-row justify-between">
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

      <View className="mt-6 flex-col items-center justify-between">
        <Button
          variant="outline"
          className="w-1/2 border-green-700 shadow shadow-foreground/10"
          onPress={addItem}
        >
          <Text className="text-lg text-green-700">Add Account</Text>
        </Button>
        {/* <Button
          variant="outline"
          className="mt-4 w-1/2 shadow shadow-foreground/10"
          onPress={testDB}
        >
          <Text className="text-lg">Test</Text>
        </Button> */}
      </View>
    </>
  );
};

export default AccountScreen;
