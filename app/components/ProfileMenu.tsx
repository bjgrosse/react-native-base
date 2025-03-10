import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import supabase from "@/supabaseClient";
import { router } from "expo-router";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { GalleryHorizontal, UserCircleIcon } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";

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
          <Icon as={GalleryHorizontal} />
        </Button>
      )}
      placement="bottom right"
    ></Menu>
  );
};
