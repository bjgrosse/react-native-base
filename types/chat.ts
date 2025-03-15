export type Role = "human" | "ai" | "system" | "function";

export interface BaseMessage {
  content: string;
  role: Role;
  name?: string;
  additionalKwargs?: Record<string, any>;
}

export interface HumanMessage extends BaseMessage {
  role: "human";
}

export interface AIMessage extends BaseMessage {
  role: "ai";
}

export interface SystemMessage extends BaseMessage {
  role: "system";
}

export interface FunctionMessage extends BaseMessage {
  role: "function";
  name: string;
}

export type Message =
  | HumanMessage
  | AIMessage
  | SystemMessage
  | FunctionMessage;
