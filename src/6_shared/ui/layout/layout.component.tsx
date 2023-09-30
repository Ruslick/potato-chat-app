import { FC, ReactNode } from 'react';
import { MainContainerStyled } from './layout.styled';

export interface MainWrapperProps {
  children: ReactNode;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const LayoutComponent: FC<MainWrapperProps> = ({ children, ...props }) => {
  return <MainContainerStyled {...props}>{children}</MainContainerStyled>;
};
