import { FC, useContext } from 'react';
import Image from 'next/image';
import { Text } from '@/components/atoms';
import { ChatContext } from '@/context/chat/ChatContext';

export const MessageHeader: FC = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <header className='message-header'>
      <div className='message-header__avatar'>
        <Image
          src='/assets/default-profile.webp'
          alt='Picture of the author'
          width={50}
          height={50}
        />
      </div>

      <div className='message-header__details'>
        <Text className='message-header__username'>{chatState.username}</Text>

        <Text className='message-header__status'>Estado</Text>
      </div>
    </header>
  );
};
