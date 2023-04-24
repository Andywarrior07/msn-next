import {
  MessageForm,
  MessageHeader,
  MessageList,
} from '@/components/molecules';

// TODO: Obtener username
export const MessageContainer = () => {
  return (
    <div className='message-container'>
      <MessageHeader />

      <MessageList />

      <MessageForm />
    </div>
  );
};
