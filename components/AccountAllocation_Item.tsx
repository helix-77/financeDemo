import { View } from "react-native";
import AccountAllocation from "../model/AccountAllocation";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "../model/Account";
import { Text } from "./ui/text";

type AccountAllocation_Item = {
  accountAllocation: AccountAllocation;
  account: Account;
};

const AccountAllocation_Item = ({
  accountAllocation,
  account,
}: AccountAllocation_Item) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>{account.name}</Text>
      <Text>${accountAllocation.amount}</Text>
    </View>
  );
};

const enhance = withObservables(
  ["accountAllocation"],
  ({ accountAllocation }: { accountAllocation: AccountAllocation }) => ({
    accountAllocation,
    account: accountAllocation.account,
  }),
);

export default enhance(AccountAllocation_Item);
