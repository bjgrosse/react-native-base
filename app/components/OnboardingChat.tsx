import React, { useState, useCallback, useEffect } from "react";
import { getChatHistory, postChatMessage } from "../api/chat";
import { Text } from "react-native";
import { Message } from "@/types/chat";
import { ChatBox } from "@/components/chat/ChatBox";
import { makeApiRequest } from "../api/fetch";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";

export function OnboardingChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchChatHistory = useCallback(async () => {
    const history = await getChatHistory();
    console.log(history);
    setMessages((prev) => [...prev, ...(history.messages || [])]);
  }, []);
  useEffect(() => {
    fetchChatHistory();
  }, [fetchChatHistory]);

  const onSend = useCallback(async (content: string) => {
    console.log("Sending message:", content);
    // console.log(makeApiRequest("/public"));
    setMessages((prevMessages) => [
      ...prevMessages,
      { content, role: "human" },
    ]);
    const result = await postChatMessage(content);
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: result.message, role: "ai" },
    ]);
  }, []);
  return (
    <>
      <Button onPress={fetchChatHistory}>
        <Text>Fetch Chat History</Text>
      </Button>
      <ChatBox messages={messages} onSendMessage={onSend} />;
    </>
  );
}
