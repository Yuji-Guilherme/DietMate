'use client';

import Link from 'next/link';
import { RegisterInput } from './RegisterInput';
import { useRegisterForm } from './hook';

import * as S from './style';

function RegisterForm() {
  const { register, handleSubmit, errors } = useRegisterForm();

  return (
    <S.Form onSubmit={handleSubmit((data) => console.log(data))}>
      <S.Title>Crie uma nova conta</S.Title>
      <S.FieldsWrapper>
        <S.Field>
          <RegisterInput
            placeholder="digite um nome de usuário"
            label="Nome de usuário"
            errorText={errors.username?.message}
            buttonType="user"
            {...register('username')}
          />
        </S.Field>
        <S.Field>
          <RegisterInput
            type="password"
            placeholder="digite uma senha"
            label="Nova senha"
            errorText={errors.password?.message}
            buttonType="eye"
            {...register('password')}
          />
        </S.Field>
        <S.Field>
          <RegisterInput
            type="password"
            placeholder="confirme sua senha"
            label="Confirmar senha"
            errorText={errors.confirmPassword?.message}
            buttonType="eye"
            {...register('confirmPassword')}
          />
        </S.Field>
      </S.FieldsWrapper>
      <S.ButtonWrapper>
        <S.RegisterButton type="submit">Cadastrar</S.RegisterButton>
        <Link href="/login" tabIndex={0} className={S.loginLinkClassName}>
          Já tem uma conta?
        </Link>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export { RegisterForm };
