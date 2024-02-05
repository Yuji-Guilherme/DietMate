'use client';

import Link from 'next/link';
import { RegisterInput } from './RegisterInput';
import { useRegisterForm } from './hook';
import { Form } from '@/components/Form';
import { FormButton, formButtonClassName } from '@/components/Button';

function RegisterForm() {
  const { register, handleSubmit, errors, touchedFields } = useRegisterForm();

  return (
    <Form.Root onSubmit={handleSubmit((data) => console.log(data))}>
      <Form.Title>Crie uma nova conta</Form.Title>
      <Form.FieldWrapper>
        <Form.Field>
          <RegisterInput
            placeholder="digite um nome de usuário"
            label="Nome de usuário"
            errorText={errors.username?.message}
            buttonType="user"
            touched={touchedFields.username}
            {...register('username')}
          />
        </Form.Field>
        <Form.Field>
          <RegisterInput
            type="password"
            placeholder="digite uma senha"
            label="Nova senha"
            errorText={errors.password?.message}
            buttonType="eye"
            touched={touchedFields.password}
            {...register('password')}
          />
        </Form.Field>
        <Form.Field>
          <RegisterInput
            type="password"
            placeholder="confirme sua senha"
            label="Confirmar senha"
            errorText={errors.confirmPassword?.message}
            buttonType="eye"
            touched={touchedFields.confirmPassword}
            {...register('confirmPassword')}
          />
        </Form.Field>
      </Form.FieldWrapper>
      <Form.ButtonWrapper>
        <FormButton.blue type="submit">Cadastrar</FormButton.blue>
        <Link
          className={formButtonClassName.noBgBlue}
          href="/login"
          tabIndex={0}
        >
          Já tem uma conta?
        </Link>
      </Form.ButtonWrapper>
    </Form.Root>
  );
}

export { RegisterForm };
