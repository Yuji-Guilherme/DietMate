'use client';

import Link from 'next/link';
import { useLoginForm } from './hook';
import { LoginInput } from './LoginInput';
import { FormButton, formButtonClassName } from '@/components/Button';
import { Form } from '@/components/Form';

import * as S from './style';

function LoginForm() {
  const { register, handleSubmit } = useLoginForm();

  return (
    <Form.Root onSubmit={handleSubmit((data) => console.log(data))}>
      <Form.Title>Entrar</Form.Title>
      <Form.FieldWrapper>
        <Form.Field>
          <LoginInput
            placeholder="digite um nome de usuário"
            label="Nome de usuário"
            buttonType="user"
            {...register('username')}
          />
        </Form.Field>
        <Form.Field>
          <LoginInput
            type="password"
            placeholder="digite uma senha"
            label="Nova senha"
            buttonType="eye"
            {...register('password')}
          />
        </Form.Field>
      </Form.FieldWrapper>
      <S.ButtonWrapper className="gap-6">
        <FormButton.blue type="submit">Entrar</FormButton.blue>
        <Link className={formButtonClassName.noBgGray} href="/dashboard">
          Entrar como visitante
        </Link>
        <Link className={formButtonClassName.gray} href="/register">
          criar uma conta
        </Link>
      </S.ButtonWrapper>
    </Form.Root>
  );
}

export { LoginForm };
