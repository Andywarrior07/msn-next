import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Input } from '@/components/atoms';
import { SocketContext } from '@/context/SocketContext';
import { AuthContext } from '@/context/auth/AuthContext';
import { ChatContext } from '@/context/chat/ChatContext';
import { format } from 'date-fns';

export const MessageForm = () => {
  const [message, setMessage] = useState<string>('');
  const { socket } = useContext(SocketContext);
  const { authState } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.length) {
      return;
    }

    socket?.emit('sendMessage', {
      from: authState.userId,
      to: chatState.activeChat,
      sentAt: format(new Date(), 'MM/dd/yyyy'),
      message,
    });

    setMessage('');
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <Input
        className='message-form__input'
        placeholder='Escribe un mensaje'
        type='text'
        value={message}
        onChange={handleOnChange}
      />

      <button className='message-form__send'>Enviar</button>
    </form>
  );
};
