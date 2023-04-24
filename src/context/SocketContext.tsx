import { useSocket } from '@/hooks/useSocket';
import { createContext, FC, useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { AuthContext } from './auth/AuthContext';
import { ChatContext } from './chat/ChatContext';
import { ChatActionType } from './chat/chatTypes';

export const SocketContext = createContext<{
  socket: Socket | undefined;
  online: boolean | undefined;
}>({
  socket: undefined,
  online: false,
});

export const SocketProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  const { dispatch: chatDispatch } = useContext(ChatContext);
  const { connectSocket, disconnectSocket, online, socket } = useSocket(
    'http://localhost:3000',
  );

  useEffect(() => {
    if (isAuthenticated) {
      connectSocket();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      disconnectSocket();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    socket?.on('sendMessage', message => {
      chatDispatch({ type: ChatActionType.NEW_MESSAGE, payload: message });
    });
  }, [socket]);
  // TODO: Para decir que un usuario, o mostrar, esta online
  // useEffect(() => {
  //   socket?.on('user-list', users => {
  //     console.log({ users });
  //   });
  // }, [socket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
