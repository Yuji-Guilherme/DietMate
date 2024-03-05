'use client';

import Link from 'next/link';
import { useLoginForm } from './hook';
import { LoginInput } from './LoginInput';
import {
  FormButton,
  FormLoadCircle,
  formButtonClassName
} from '@/components/Button';
import { Form } from '@/components/Form';

import * as S from './style';

function LoginForm() {
  const {
    register,
    handleSubmit,
    useHandleLogin,
    isError,
    fetchLoad,
    buttonRef,
    handlePressEnter
  } = useLoginForm();

  return (
    <Form.Root onSubmit={handleSubmit(useHandleLogin)}>
      <Form.Title>Entrar</Form.Title>
      <Form.FieldWrapper>
        <Form.Field>
          <LoginInput
            hasError={isError}
            placeholder="digite um nome de usuário"
            label="Nome de usuário"
            buttonType="user"
            onKeyDown={handlePressEnter}
            {...register('username')}
          />
        </Form.Field>
        <Form.Field>
          <LoginInput
            hasError={isError}
            type="password"
            placeholder="digite uma senha"
            label="Nova senha"
            buttonType="eye"
            onKeyDown={handlePressEnter}
            {...register('password')}
          />
        </Form.Field>
      </Form.FieldWrapper>
      <S.ButtonWrapper className="gap-6">
        <FormButton.blue disabled={fetchLoad} ref={buttonRef} type="submit">
          {fetchLoad && <FormLoadCircle />}
          Entrar
        </FormButton.blue>
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
