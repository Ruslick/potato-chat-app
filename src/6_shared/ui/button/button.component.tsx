import { ButtonComponent } from "./button.styled";
import { ButtonProps } from "../../model/button";

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <ButtonComponent onClick={onClick} type={type}>
      {children}
    </ButtonComponent>
  );
};
