import { FlatList, View } from "react-native";
import Item_Card from "./Item_Card";
import { accountsCollection } from "~/db";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "~/model/Account";

function List_itemCard({ accounts }: { accounts: Account[] }) {
  return (
    <>
      <FlatList
        data={accounts}
        renderItem={({ item }) => <Item_Card account={item} />}
      />
    </>
  );
}

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(), // ___.observe() is working in the background. And
})); // we wont use fetch() this time to read the data.
export default enhance(List_itemCard);
