import { InputProps } from '../../model/input';
import { InputComponent } from './input.styled';

export function Input({ value, onChange, name, type, placeholder, id }: InputProps) {
  return (
    <InputComponent
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
}
