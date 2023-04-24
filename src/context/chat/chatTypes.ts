export interface Message {
  _id: string;
  from: string;
  to: string;
  message: string;
  sentAt: string;
}

export interface ChatState {
  userId: string;
  activeChat: string | null;
  username: string;
  messages: Message[];
}

export enum ChatActionType {
  ACTIVATE_CHAT = 'ACTIVATE_CHAT',
  NEW_MESSAGE = 'NEW_MESSAGE',
  LOAD_CHAT = 'LOAD_CHAT',
}

export interface ActivateChatAction {
  type: ChatActionType.ACTIVATE_CHAT;
  payload: { userId: string; username: string };
}

export interface NewMessageAction {
  type: ChatActionType.NEW_MESSAGE;
  payload: Message;
}

export interface LoadChatAction {
  type: ChatActionType.LOAD_CHAT;
  payload: Message[];
}

export type ChatAction = ActivateChatAction | NewMessageAction | LoadChatAction;
