import { FieldErrors, UseFormRegister } from "react-hook-form";
import Input from "../Input";
import { UserFormData } from "@/schemas/userFormSchema";

type FormFieldsprops = {
  register: UseFormRegister<UserFormData>;
  errors: FieldErrors<UserFormData>;
};

const FormFields = ({ register, errors }: FormFieldsprops) => {
  return (
    <>
      {" "}
      <Input
        label="Nome"
        placeholder="Digite seu nome completo"
        error={errors.name?.message}
        name="name"
        register={register}
      />
      <Input
        label="E-mail"
        placeholder="Digite seu email para contato"
        error={errors.email?.message}
        name="email"
        register={register}
      />
    </>
  );
};

export default FormFields;
