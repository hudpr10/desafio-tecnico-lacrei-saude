import { UseFormRegister } from "react-hook-form";

import InputStyled from "./style";

import { UserFormData } from "@/schemas/userFormSchema";

type InputProps = {
  label: string;
  placeholder: string;
  name: keyof UserFormData;
  register: UseFormRegister<UserFormData>;
  error?: string;
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
        aria-invalid={Boolean(error)}
        aria-describedby={error}
      />
      {error && <span role="alert">{error}</span>}
    </InputStyled>
  );
};

export default Input;
