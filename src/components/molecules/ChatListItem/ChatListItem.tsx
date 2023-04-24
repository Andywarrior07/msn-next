import { FC, useContext } from 'react';
import Image from 'next/image';
import { Text } from '@/components/atoms';
import { AuthContext } from '@/context/auth/AuthContext';
import { ChatContext } from '@/context/chat/ChatContext';
import { ChatActionType } from '@/context/chat/chatTypes';
import { getMessages } from '@/services/chat.service';

interface Props {
  lastMessage: string;
  lastMessageDate: string;
  userId: string;
  username: string;
}

export const ChatListItem: FC<Props> = ({
  lastMessage,
  lastMessageDate,
  userId,
  username,
}) => {
  const { authState } = useContext(AuthContext);
  const { chatState, dispatch: chatDispatch } = useContext(ChatContext);

  const handleOnClick = async () => {
    chatDispatch({
      type: ChatActionType.ACTIVATE_CHAT,
      payload: { userId, username },
    });

    const messages = await getMessages(userId, authState.userId);

    chatDispatch({ type: ChatActionType.LOAD_CHAT, payload: messages });
  };

  return (
    <li
      className={`chat-list-item ${
        chatState.activeChat === userId ? 'is-active' : ''
      }`}
      onClick={handleOnClick}
    >
      <div className='chat-list-item__avatar'>
        <Image
          src='/assets/default-profile.webp'
          alt='Picture of the author'
          width={50}
          height={50}
        />
      </div>
      <div className='chat-list-item__details'>
        <Text className='chat-list-item__username'>{username}</Text>

        <Text className='chat-list-item__last-message'>{lastMessage}</Text>

        <Text className='chat-list-item__lastMessageDate'>
          {lastMessageDate}
        </Text>

        <Text className='chat-list-item__notification'>N</Text>
      </div>
    </li>
  );
};
