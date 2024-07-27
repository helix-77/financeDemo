import { View } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Text } from "./ui/text";
import Account from "~/model/Account";

export default function Item_Card({ account }: { account: Account }) {
  return (
    <Card className="my-3 w-full max-w-sm">
      <View className="flex flex-row items-center justify-between px-4 py-2">
        <View className="w-[50vw]">
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
  );
}
