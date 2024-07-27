import { FlatList, View } from "react-native";
import Item_Card from "./Item_Card";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
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
const EnhancedList_itemCard = enhance(List_itemCard);
export default EnhancedList_itemCard;
