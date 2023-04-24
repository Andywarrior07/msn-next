import { ChatAction, ChatActionType, ChatState } from './chatTypes';

export const chatReducer = (
  state: ChatState,
  action: ChatAction,
): ChatState => {
  switch (action.type) {
    case ChatActionType.ACTIVATE_CHAT:
      if (state.activeChat === action.payload.userId) return state;

      return {
        ...state,
        activeChat: action.payload.userId,
        username: action.payload.username,
        messages: [],
      };

    case ChatActionType.NEW_MESSAGE:
      if (
        state.activeChat === action.payload.from ||
        state.activeChat === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      }

      return state;

    case ChatActionType.LOAD_CHAT:
      return {
        ...state,
        messages: [...action.payload],
      };

    default:
      return state;
  }
};
