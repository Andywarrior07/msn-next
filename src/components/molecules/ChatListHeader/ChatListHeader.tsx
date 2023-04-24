import { Button, Text } from '@/components/atoms';

export const ChatListHeader = () => {
  return (
    <header className='chat-list-header'>
      <Text className='chat-list-header__title'>Mensajes</Text>
      <div className='chat-list-header__actions'>
        {/* <Input type='text' placeholder='Buscar' size='small' /> */}

        <Button className='chat-list-header__action chat-list-header__action--search'>
          B
        </Button>

        <Button className='chat-list-header__action chat-list-header__action--new'>
          N
        </Button>
      </div>
    </header>
  );
};
