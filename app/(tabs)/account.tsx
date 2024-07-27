import { Alert, View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import List_itemCard from "~/components/List_itemCard";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import database, { accountsCollection } from "~/db";

const AccountScreen = () => {
  const [name, setName] = React.useState("");
  const [cap, setCap] = React.useState("");
  const [tap, setTap] = React.useState("");

  const addItem = () => {
    console.log("name", name);
    console.log("cap", cap);
    console.log("tap", tap);
    // sync with watermelondb
  };

  const testDB = async () => {
    // create new post
    // await database.write(async () => {
    //   await accountsCollection.create((account) => {
    //     account.name = "tedjadshsakdnkljasdst";
    //     account.cap = 99.5;
    //     account.tap = 99;
    //   });
    // });

    // // fetch account
    const allAccounts = await accountsCollection.query().fetch();
    console.log(allAccounts);

    // delete
    // await database.write(async () => {
    //   await accountsCollection.query().destroyAllPermanently();
    // });
  };

  return (
    <>
      <View className="mx-5 mt-3 justify-center align-middle">
        <List_itemCard />
      </View>
      <View className="mx-9 mt-10 flex-row justify-between">
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
        <Button
          variant="outline"
          className="mt-4 w-1/2 shadow shadow-foreground/10"
          onPress={testDB}
        >
          <Text className="text-lg">Test</Text>
        </Button>
      </View>
    </>
  );
};

export default AccountScreen;
