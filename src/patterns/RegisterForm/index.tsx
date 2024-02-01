'use client';

import Link from 'next/link';
import { Input } from '@/components/Input';
import { useRegisterForm } from './hook';

import * as S from './style';

function RegisterForm() {
  const { register, handleSubmit, errors } = useRegisterForm();

  return (
    <S.Form onSubmit={handleSubmit((data) => console.log(data))}>
      <S.Title>Crie uma nova conta</S.Title>
      <S.FieldsWrapper>
        <S.Field>
          <Input
            {...register('username')}
            label="Nome de usuário"
            placeholder="digite um nome de usuário"
            errorMessage={errors.username?.message}
          />
        </S.Field>
        <S.Field>
          <Input
            {...register('password')}
            label="Nova senha"
            placeholder="digite uma senha"
            type="password"
            errorMessage={errors.password?.message}
          />
        </S.Field>
        <S.Field>
          <Input
            {...register('confirmPassword')}
            label="Confirmar senha"
            placeholder="confirme sua senha"
            type="password"
            errorMessage={errors.confirmPassword?.message}
          />
        </S.Field>
      </S.FieldsWrapper>
      <S.ButtonWrapper>
        <S.RegisterButton type="submit">Cadastrar</S.RegisterButton>
        <Link href="/login" className={S.loginLinkClassName}>
          Já tem uma conta?
        </Link>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export { RegisterForm };
