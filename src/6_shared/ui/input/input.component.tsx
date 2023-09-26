import { InputProps } from '../../model/input';
import { InputComponent } from './input.styled';

export function Input({ value, onChange, name, type, placeholder, id, label }: InputProps) {
  return (
    <>
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      <InputComponent
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
      />
    </>
  );
}
