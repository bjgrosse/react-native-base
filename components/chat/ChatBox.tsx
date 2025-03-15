import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { ScrollView } from "react-native";
import { Send } from "lucide-react-native";
import type { Message } from "../../types/chat";

interface ChatBoxProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
}

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isAI = message.role === "ai";

  return (
    <Box
      className={`${
        isAI ? "bg-secondary-100" : "bg-primary-100"
      } p-3 rounded-lg max-w-[80%] ${isAI ? "self-start" : "self-end"} mb-2`}
    >
      <Text className={isAI ? "text-secondary-800" : "text-primary-800"}>
        {message.content}
      </Text>
    </Box>
  );
};

export const ChatBox: React.FC<ChatBoxProps> = ({
  messages,
  onSendMessage,
  isLoading = false,
}) => {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText.trim());
      setInputText("");
    }
  };

  return (
    <Box className="flex-1 bg-backgroundLight-50">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 16,
        }}
      >
        <VStack className="flex-1 justify-end" space="md">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
        </VStack>
      </ScrollView>

      <Box className="border-t border-borderLight-200 p-4 bg-white">
        <HStack space="sm">
          <Box className="flex-1">
            <Input isDisabled={isLoading}>
              <InputField
                placeholder="Type a message..."
                value={inputText}
                onChangeText={setInputText}
                onSubmitEditing={handleSend}
              />
            </Input>
          </Box>
          <Button
            size="md"
            onPress={handleSend}
            isDisabled={isLoading || !inputText.trim()}
            variant="solid"
          >
            <ButtonText>
              <Send size={20} />
            </ButtonText>
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};
