import React from 'react';

export const ChatList = () => {
  return (
    <aside className='chat-container'>
      <header className='chat-header'>
        <h2 className='chat-header__title'>Mensajes</h2>

        <div className='chat-header__actions'>
          <button className='chat-header__action chat-header__action--search'>
            Search
          </button>
          <button className='chat-header__action chat-header__action--new'></button>
        </div>
      </header>

      <div className='chat-list'>
        <ul className='chat-list__items'>
          <li className='chat-item'>
            <div className='chat-item__username'>Username</div>

            <div className='chat-item__last-message'>Ultimo mensaje</div>

            <div className='chat-item__date'>Fecha</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
