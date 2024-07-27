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
        contentContainerClassName="max-w-sm mx-4"
      />
    </>
  );
}

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));
export default enhance(List_itemCard);
