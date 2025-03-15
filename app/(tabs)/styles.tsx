import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Text, View } from "react-native";

export default function StylesScreen() {
  return (
    <View>
      <Box className="flex flex-col gap-4 p-4">
        <Text>Styles</Text>
        <Button onPress={() => {}}>
          <ButtonText>Button</ButtonText>
        </Button>
      </Box>
    </View>
  );
}
