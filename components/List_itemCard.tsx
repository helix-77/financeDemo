import { FlatList, View } from "react-native";
import Item_Card from "./Item_Card";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

export default function List_itemCard() {
  return (
    <>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => <Item_Card />}
        contentContainerClassName="max-w-sm  mx-4"
      />
    </>
  );
}
