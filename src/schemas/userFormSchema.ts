import { z } from "zod";

// Schema Zod responsável por validar cada campo do formulário.
// Aqui definimos regras, mensagens personalizadas e tipos.
// O React Hook Form vai usar esse schema para validar antes da submissão.
export const userFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "O campo 'Nome' é obrigatório." })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." })
    .max(30, { message: "O nome não pode ultrapassar 30 caracteres." }),
  email: z
    .string()
    .nonempty({ message: "O campo 'E-mail' é obrigatório." })
    .email({ message: "Por favor digite um e-mail válido" }),
});

// Tipagem dos dados esperados pelo formulário.
export type UserFormData = z.infer<typeof userFormSchema>;
