import { User } from '@/context/auth/authTypes';
import { ChatListItem } from '../ChatListItem';
import { useEffect, useState } from 'react';
import { getFriends } from '@/services/users.service';

export const ChatList = () => {
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    getFriends().then(setFriends);
  }, []);

  // TODO: Ver como obtener el lastMessage, quiza teniendo un Schema de cada chat donde tenga un array con los Messages y asi obtener el ultimo
  // TODO: Y asi poder obtener la fecha del ultimo mensaje tmb
  // TODO: Agregar logica para isActive
  return (
    <ul className='chat-list'>
      {friends.map(friend => (
        <ChatListItem
          key={friend._id}
          lastMessage='Ultimo mensaje'
          lastMessageDate='15:31'
          userId={friend._id!}
          username={friend.username!}
        />
      ))}
    </ul>
  );
};
