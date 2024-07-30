import React from "react";
import { FlatList } from "react-native";
import AllocationList_Item from "./AllocationList_Item";
import { withObservables } from "@nozbe/watermelondb/react";
import database, { allocationsCollection } from "~/db";
import Allocation from "~/model/Allocation";
import { Q } from "@nozbe/watermelondb";

const Allocation_List = ({ allocations }: { allocations: Allocation[] }) => {
  return (
    <>
      <FlatList
        data={allocations}
        renderItem={({ item }) => <AllocationList_Item allocation={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

// component will fetch all the data at once. So
// doesn't need to use any props to determine which data to fetch
const enhance = withObservables([], () => ({
  allocations: allocationsCollection.query(Q.sortBy("created_At", Q.desc)),
}));

export default enhance(Allocation_List);
