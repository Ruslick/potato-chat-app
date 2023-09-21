import { FC } from 'react';
import { createPortal } from 'react-dom';
import { LoaderStyled, LoaderWrapperStyled } from './loader.styled';

interface LoaderProps {
  isVisible: boolean;
}

export const Loader: FC<LoaderProps> = ({ isVisible }) => {
  return createPortal(
    <LoaderWrapperStyled $isVisible={isVisible}>
      <LoaderStyled>
        <div />
        <div />
        <div />
        <div />
      </LoaderStyled>
    </LoaderWrapperStyled>,
    document.getElementById('modal') as HTMLElement
  );
};
