import { View, Text, Pressable } from "react-native";
import React from "react";
import { supabase } from "~/lib/supabase";
import { cn } from "~/lib/utils";
import { useColorScheme } from "~/lib/useColorScheme";
import { LogOut } from "~/lib/icons/Logout";

const Logout = () => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  return (
    <Pressable onPress={() => supabase.auth.signOut()}>
      {({ pressed }) => (
        <View
          className={cn(
            "aspect-square flex-1 items-start justify-center pt-0.5 web:px-5",
            pressed && "opacity-70",
          )}
        >
          {isDarkColorScheme ? (
            <LogOut className="text-foreground" size={23} />
          ) : (
            <LogOut className="text-foreground" size={24} />
          )}
        </View>
      )}
    </Pressable>
  );
};

export default Logout;
