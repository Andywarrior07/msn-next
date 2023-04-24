import type { AppProps } from 'next/app';
import { SocketProvider } from '@/context/SocketContext';
import { ChatProvider } from '@/context/chat/ChatContext';
import { AuthProvider } from '@/context/auth/AuthContext';
import '../sass/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChatProvider>
        <SocketProvider>
          <Component {...pageProps} />
        </SocketProvider>
      </ChatProvider>
    </AuthProvider>
  );
}
