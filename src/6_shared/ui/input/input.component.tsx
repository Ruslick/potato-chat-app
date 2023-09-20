import { FC } from "react";
import { InputProps } from "../../model/input";
import { InputComponent } from "./input.styled";

export const Input: FC<InputProps> = ({
  value,
  onChange,
  name,
  type,
  placeholder,
}) => {
  return (
    <InputComponent
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
