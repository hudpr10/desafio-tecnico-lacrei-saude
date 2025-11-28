"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import Button from "../Button";
import StyledForm from "./style";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";

// Tipagem dos dados esperados pelo formulário.
// Serve para garantir que os valores enviados e manipulados
export type FormData = {
  name: string;
  email: string;
};

const Form = () => {
  // Schema Zod responsável por validar cada campo do formulário.
  // Aqui definimos regras, mensagens personalizadas e tipos.
  // O React Hook Form vai usar esse schema para validar antes da submissão.
  const schema = z.object({
    name: z
      .string()
      .min(2, { message: "O campo 'Nome' é obrigatório." })
      .max(30, { message: "O nome não pode ultrapassar 30 caracteres." }),
    email: z.email({ message: "O campo 'E-mail' é obrigatório." }),
  });

  // Hook principal do React Hook Form.
  const {
    register, // - register: conecta inputs ao RHF
    handleSubmit, // - handleSubmit: executa validação + chama a função de submit
    formState: { errors }, // - formState.errors: armazena mensagens de erro vindas do schema
  } = useForm<FormData>({
    resolver: zodResolver(schema), // O resolver faz a ponte entre Zod e RHF, aplicando validação automática.
  });

  // Função executada quando o formulário passa na validação.
  const dispatch = useDispatch();
  const submitData = (data: FormData) => {
    dispatch(setUser(data));
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitData)}>
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

      {/* 
        Botão desabilitado caso exista algum erro de validação.
        Isso impede submissão até que erros sejam corrigidos.
      */}
      <Button
        disabled={errors.name?.message || errors.email?.message ? true : false}
        handleClick={() => {}}
        type="submit"
      >
        Enviar
      </Button>
    </StyledForm>
  );
};

export default Form;
