import { useCallback, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export const useSocket = (serverPath: string) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [online, setOnline] = useState<boolean | undefined>(false);

  const connectSocket = useCallback(() => {
    const accessToken = localStorage.getItem('accessToken');
    const socketTemp = io(serverPath, {
      auth: {
        accessToken,
      },
    });

    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    connectSocket,
    disconnectSocket,
    online,
    socket,
  };
};
