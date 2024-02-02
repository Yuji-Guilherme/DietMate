import { z } from 'zod';

const registerSchema = z
  .object({
    username: z
      .string()
      .min(5, 'Por favor insira um nome válido de usuário')
      .max(20, 'Por favor insira um nome de usuário mais curto')
      .refine((name) => !name.includes(' '), 'O nome não pode conter espaços'),
    password: z
      .string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .refine((pass) => !pass.includes(' '), 'A senha não pode conter espaços'),
    confirmPassword: z.string()
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais'
  })
  .transform((fields) => ({
    username: fields.username.toLocaleLowerCase(),
    password: fields.password,
    confirmPassword: fields.confirmPassword
  }));

type FormProps = z.infer<typeof registerSchema>;

export { registerSchema };
export type { FormProps };
