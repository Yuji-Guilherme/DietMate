import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useCustomForm } from '@/hook/useCustomForm';
import { mutationFn } from './registerMutationFns';
import { registerSchema as schema } from '@/schemas/registerSchema';
import { redirect } from 'next/navigation';

type RegisterData = {
  username: string;
  password: string;
  confirmPassword: string;
};

const useRegisterForm = () => {
  const { register, handleSubmit, errors, touchedFields, watch } =
    useCustomForm({
      schema,
      mode: 'onBlur'
    });

  const { mutate, isError, isSuccess, isPending, reset } = useMutation({
    mutationKey: ['register'],
    mutationFn
  });

  const useHandleRegister = async (data: RegisterData) => {
    mutate({ username: data.username, password: data.password });
  };

  const usernameValue: string = watch().username;

  useEffect(() => {
    if (isError) {
      reset();
    }
  }, [usernameValue]);

  useEffect(() => {
    if (isSuccess) {
      redirect('/dashboard');
    }
  }, [isSuccess]);

  const fetchErrorText = isError
    ? 'Nome de usuário não disponível.'
    : undefined;

  const usernameErrorText =
    errors.username?.message?.toString() || fetchErrorText;

  return {
    register,
    handleSubmit,
    errors,
    touchedFields,
    useHandleRegister,
    usernameErrorText,
    fetchLoad: isPending
  };
};

export { useRegisterForm };
export type { RegisterData };
