import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className: string;
  [key: string]: string | React.ReactNode | undefined;
}

export const Text: FC<Props> = ({
  children,
  className,
  size = 'medium',
  ...props
}) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};
