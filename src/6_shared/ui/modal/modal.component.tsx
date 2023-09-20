import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  ModalCloseButtonStyled,
  ModalContentStyled,
  ModalDividerStyled,
  ModalHeaderStyled,
  ModalWrapperStyled,
} from "./modal.styled";

interface ModalProps {
  title: string;
  toggleModal: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ title, toggleModal, children }) => {
  const handleToggleModal = () => {
    toggleModal();
  };

  return createPortal(
    <ModalWrapperStyled onClick={handleToggleModal}>
      <ModalContentStyled onClick={(e) => e.stopPropagation()}>
        <ModalHeaderStyled>
          <h3>{title}</h3>
          <ModalCloseButtonStyled onClick={handleToggleModal}>
            X
          </ModalCloseButtonStyled>
        </ModalHeaderStyled>
        <ModalDividerStyled />
        {children}
      </ModalContentStyled>
    </ModalWrapperStyled>,
    document.getElementById("modal") as HTMLElement,
  );
};
