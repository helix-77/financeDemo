import { View } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export default function Item_Card() {
  return (
    <Card className="w-full max-w-sm my-3">
      <View className="flex flex-row justify-evenly py-3 ">
        <CardHeader className="pr-20 items-start">
          <CardTitle>Profit</CardTitle>
        </CardHeader>
        <View className=" justify-center">
          <Text className="text-lg">10%</Text>
          <CardDescription>Cap</CardDescription>
        </View>
        <View className=" justify-center">
          <Text className="text-lg">20%</Text>
          <CardDescription>Tap</CardDescription>
        </View>
      </View>
    </Card>
  );
}

// CardDescription, CardContent, CardFooter, CardHeader, CardTitle, Text
