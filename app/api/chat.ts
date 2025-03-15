import { makeApiRequest } from "./fetch";
export async function postChatMessage(
  message: string
): Promise<{ message: string }> {
  return await makeApiRequest("/climb/onboarding-chat", {
    method: "POST",
    body: { message },
  });
}

export async function getChatHistory() {
  return await makeApiRequest("/climb/onboarding-chat", {
    method: "GET",
  });
}
