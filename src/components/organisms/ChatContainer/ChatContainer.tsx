import { ChatListHeader, ChatList } from '@/components/molecules';

export const ChatContainer = () => {
  return (
    <div className='chat-container'>
      <ChatListHeader />
      <ChatList />
    </div>
  );
};
