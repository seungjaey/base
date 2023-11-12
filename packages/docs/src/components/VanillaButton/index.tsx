import { PropsWithChildren, ComponentProps } from 'react';
import { button, ButtonVariants } from '@/css/app.css';

type Props = ButtonVariants & {
  buttonProps?: ComponentProps<'button'>;
};

export const VanillaButton = ({ color, shape, size, type, buttonProps, children }: PropsWithChildren<Props>) => {
  return (
    <button
      className={button({
        color,
        shape,
        size,
        type,
      })}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
};
