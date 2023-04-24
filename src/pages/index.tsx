import { ChatContainer, MessageContainer } from '@/components/organisms';

export default function Home() {
  return (
    <div className='home'>
      <ChatContainer />

      <MessageContainer />
    </div>
  );
}

// TODO: Si no esta logeado el usuario, mandar al signin
// TODO: Si esta logeado permanecer aca
// TODO: Mostrar usuarios y grupos al lado izquierdo
// TODO: Al lado derecho mostrar chat, si noe sta seleccionado ninguno que diga algo como "seleccionar chat"
