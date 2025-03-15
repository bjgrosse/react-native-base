import React, { useState, useCallback, useEffect } from "react";
import { postChatMessage } from "../api/chat";
import { Text } from "react-native";
import { Message } from "@/types/chat";
import { ChatBox } from "@/components/chat/ChatBox";
import { makeApiRequest } from "../api/fetch";
import { useAuth } from "../context/AuthContext";

export function OnboardingChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    setMessages([
      {
        content: "Hello developer",
        role: "human",
      },
    ]);
  }, []);

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
  return <ChatBox messages={messages} onSendMessage={onSend} />;
}
