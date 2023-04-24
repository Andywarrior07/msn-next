import { createContext, Dispatch, FC, useReducer } from 'react';
import { chatReducer } from './chatReducer';
import { ChatAction, ChatState } from './chatTypes';

const initialState: ChatState = {
  userId: '',
  activeChat: null,
  username: '',
  messages: [],
};

export const ChatContext = createContext<{
  chatState: ChatState;
  dispatch: Dispatch<ChatAction>;
}>({ chatState: initialState, dispatch: () => null });

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ChatProvider: FC<Props> = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ chatState, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
