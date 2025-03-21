import React from "react";
import { TouchableOpacity } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import supabase from "@/supabaseClient";
import { router } from "expo-router";
import { Menu, MenuItem, MenuItemLabel } from "./ui/menu";
import { Button } from "./ui/button";
import { ThemedText } from "./ThemedText";
import { Icon } from "./ui/icon";
import { GalleryVerticalIcon, UserCircleIcon } from "lucide-react-native";

export const ProfileMenu = () => {
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.replace("/(auth)/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <Menu
      trigger={({ ...triggerProps }) => (
        <Button {...triggerProps} variant="link" p={2}>
          <Icon
            as={UserCircleIcon}
            className="text-typography-500 text-9xl"
            size="xl"
          />
        </Button>
      )}
      placement="bottom right"
    >
      <MenuItem onPress={handleLogout}>
        <MenuItemLabel>Logouts</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};
