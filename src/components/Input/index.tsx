import { UseFormRegister } from "react-hook-form";
import type { FormData } from "../Form";
import InputStyled from "./style";

type InputProps = {
  label: string;
  placeholder: string;
  error?: string | undefined;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
};

const Input = ({ label, placeholder, error, register, name }: InputProps) => {
  return (
    <InputStyled>
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name)}
        id={name}
        autoComplete={name}
      />
      {error && <span>{error}</span>}
    </InputStyled>
  );
};

export default Input;
