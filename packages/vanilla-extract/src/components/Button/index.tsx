import type { PropsWithChildren } from 'react';

import { button } from './Button.css';

export enum Sizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type Size = keyof typeof Sizes;

interface Props {
  color: string;
  size: Size;
  state: string; // [enabled, hover, inactive]
  shape: string; // [square, radius]
}

export const Button = ({ children, size }: PropsWithChildren<Props>) => {
  return <button className={button()}>{children}</button>;
};
