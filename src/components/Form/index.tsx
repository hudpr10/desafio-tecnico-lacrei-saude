"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";

import StyledForm from "./style";
import FormFields from "./FormFields";
import FormButton from "./FormButton";

import { setUser } from "@/store/slices/userSlice";
import { UserFormData, userFormSchema } from "@/schemas/userFormSchema";

const Form = () => {
  // Hook principal do React Hook Form.
  const {
    register, // register: conecta inputs ao RHF
    handleSubmit, // handleSubmit: executa validação + chama a função de submit
    formState: { errors }, // formState.errors: armazena mensagens de erro vindas do schema
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema), // O resolver faz a ponte entre Zod e RHF, aplicando validação automática
  });
  // --------------------------------------------------------

  // Função executada quando o formulário passa na validação.
  const dispatch = useDispatch();
  const submitData = (data: UserFormData) => {
    dispatch(setUser(data));
  };
  // --------------------------------------------------------

  // Botão desabilitado caso exista algum erro de validação.
  // Isso impede submissão até que erros sejam corrigidos.
  const hasError: boolean =
    errors.name?.message || errors.email?.message ? true : false;
  // --------------------------------------------------------

  return (
    <StyledForm onSubmit={handleSubmit(submitData)}>
      <FormFields register={register} errors={errors} />
      <FormButton disabled={hasError} />
    </StyledForm>
  );
};

export default Form;
