import { View, Text } from "react-native";
import React from "react";
import { Slot, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeToggle } from "~/components/ThemeToggle";

const TabLayout = () => {
  return (
    <Tabs>
      {/* Allocation tab */}
      <Tabs.Screen
        name="allocations"
        options={{
          title: "Allocation",
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="account-balance-wallet" size={size} color={color} />
          ),
        }}
      />
      {/* account tab */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="account-box" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
