import type { ComponentProps, PropsWithChildren } from 'react';

interface Props {
  buttonProps: ComponentProps<'button'>;
}

export const ButtonBase = ({ buttonProps }: PropsWithChildren<Props>) => {
  return <button {...buttonProps}></button>;
};
