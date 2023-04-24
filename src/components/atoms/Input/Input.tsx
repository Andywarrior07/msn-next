import { ChangeEvent, FC } from 'react';

interface Props {
  type?: string;
  className: string;
  [key: string]:
    | string
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | undefined;
}

export const Input: FC<Props> = ({ type = 'text', className, ...props }) => {
  return <input type={type} className={className} {...props} />;
};
