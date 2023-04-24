import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthActionType, User } from '@/context/auth/authTypes';
import { AuthContext } from '@/context/auth/AuthContext';
import { ChatActionType } from '@/context/chat/chatTypes';
import { ChatContext } from '@/context/chat/ChatContext';
import { SocketContext } from '@/context/SocketContext';
import { getFriends } from '@/services/users.service';
import { getMessages } from '@/services/chat.service';

export default function Test() {
  const [friends, setFriends] = useState<User[]>([]);
  const [message, setMessage] = useState<string>('');
  const { authState, dispatch: authDispatch } = useContext(AuthContext);
  const { chatState, dispatch: chatDispatch } = useContext(ChatContext);
  const { socket } = useContext(SocketContext);
  const router = useRouter();

  useEffect(() => {
    getFriends().then(setFriends);
  }, []);

  const handleUserChat = async (user: User) => {
    chatDispatch({ type: ChatActionType.ACTIVATE_CHAT, payload: user._id! });

    const messages = await getMessages(user._id!, authState.userId);

    chatDispatch({ type: ChatActionType.LOAD_CHAT, payload: messages });
  };

  const handleLogout = () => {
    authDispatch({ type: AuthActionType.LOGOUT });
    router.replace('/signin');
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.length) {
      return;
    }

    socket?.emit('sendMessage', {
      from: authState.userId,
      to: chatState.activeChat,
      message,
    });

    setMessage('');
  };

  return (
    <div>
      <div>
        <h2>Users</h2>
        <ul>
          {friends.map(friend => (
            <li
              key={friend._id}
              onClick={() => handleUserChat(friend)}
              style={{
                color: friend._id === chatState.activeChat ? 'red' : 'black',
              }}
            >
              {friend.username}
            </li>
          ))}
        </ul>

        <button onClick={handleLogout}>Logout</button>
        {chatState.activeChat ? (
          <div>
            <h2>Chat</h2>

            {chatState.messages?.map((message, idx) =>
              message.to === authState.userId ? (
                <div className='incomming' key={idx}>
                  <span>{message.message}</span>
                </div>
              ) : (
                <div className='outgoing' key={idx}>
                  <span>{message.message}</span>
                </div>
              ),
            )}

            <div>
              <form onSubmit={onSubmit}>
                <input
                  type='text'
                  placeholder='mensaje'
                  value={message}
                  onChange={handleOnChange}
                />
                <button type='submit'>Enviar mensaje</button>
              </form>
            </div>
          </div>
        ) : (
          <h2>Selecciona un chat</h2>
        )}
      </div>
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   console.log(ctx);
//   // const { data } = await  axios.get('http://localhost:3000/api/users/')

//   return {
//     props: {},
//   };
// };
