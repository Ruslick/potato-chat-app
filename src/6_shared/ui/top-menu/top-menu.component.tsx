import { FC, ReactNode } from 'react';
import { MenuWrapper } from './top-menu.styled';

interface TopMenuProps {
  children: ReactNode;
}

export const TopMenuComponent: FC<TopMenuProps> = ({ children }) => {
  return <MenuWrapper>{children}</MenuWrapper>;
};
