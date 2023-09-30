import { ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  display?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
  backgroundColor?: string;
}
