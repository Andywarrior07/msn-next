import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className: string;
  [key: string]: string | React.ReactNode | undefined;
}

export const Button: FC<Props> = ({
  type = 'button',
  className,
  children,
  ...props
}) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
};
