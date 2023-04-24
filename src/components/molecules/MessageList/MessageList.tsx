import { useContext, useEffect, useRef } from 'react';
import { MessageListItem } from '../MessageListItem';
import { ChatContext } from '@/context/chat/ChatContext';
import { AuthContext } from '@/context/auth/AuthContext';

export const MessageList = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { authState } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer!.scrollTop = chatContainer!.scrollHeight;
  }, [chatState.messages]);

  return (
    <div className='message-list' ref={chatContainerRef}>
      {chatState.messages.map(message => (
        <MessageListItem
          key={message._id}
          date='date'
          message={message.message}
          type={message.to === authState.userId ? 'incomming' : 'outgoing'}
        />
      ))}
    </div>
  );
};
