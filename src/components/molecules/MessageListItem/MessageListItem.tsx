import { FC } from 'react';

interface Props {
  date: string;
  message: string;
  type: 'incomming' | 'outgoing';
}

export const MessageListItem: FC<Props> = ({ date, message, type }) => {
  return (
    <div className={`message-list-item message-list-item--${type}`}>
      <span className='message-list-item__message'>{message}</span>

      {/* <span className='message-list-item__date'>{date}</span> */}
    </div>
  );
};
