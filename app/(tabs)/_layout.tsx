import { View, Text } from "react-native";
import React from "react";
import { Redirect, Slot, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useAuth } from "~/providers/AuthProvider";
import Logout from "~/components/Logout";

const TabLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs>
      {/* Allocation tab */}
      <Tabs.Screen
        name="allocations"
        options={{
          title: "Allocation",
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* account tab */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerRight: () => <Logout />,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="account-box" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
