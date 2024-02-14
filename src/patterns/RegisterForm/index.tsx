'use client';

import Link from 'next/link';
import { RegisterInput } from './RegisterInput';
import { useRegisterForm } from './hook';
import { Form } from '@/components/Form';
import {
  FormButton,
  formButtonClassName,
  FormLoadCircle
} from '@/components/Button';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    errors,
    touchedFields,
    useHandleRegister,
    usernameErrorText,
    fetchLoad
  } = useRegisterForm();

  return (
    <Form.Root onSubmit={handleSubmit(useHandleRegister)}>
      <Form.Title>Crie uma nova conta</Form.Title>
      <Form.FieldWrapper>
        <Form.Field>
          <RegisterInput
            placeholder="digite um nome de usuário"
            label="Nome de usuário"
            errorText={usernameErrorText}
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
            errorText={errors.password?.message?.toString()}
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
            errorText={errors.confirmPassword?.message?.toString()}
            buttonType="eye"
            touched={touchedFields.confirmPassword}
            {...register('confirmPassword')}
          />
        </Form.Field>
      </Form.FieldWrapper>
      <Form.ButtonWrapper>
        <FormButton.blue disabled={fetchLoad} type="submit">
          {fetchLoad && <FormLoadCircle />}
          Cadastrar
        </FormButton.blue>
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
