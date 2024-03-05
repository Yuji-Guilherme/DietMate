import { useEffect, useRef, type KeyboardEvent } from 'react';
import { redirect } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useCustomForm } from '@/hook/useCustomForm';
import { mutationFn } from './registerMutationFns';
import { registerSchema as schema } from '@/schemas/registerSchema';

type RegisterData = {
  username: string;
  password: string;
  confirmPassword: string;
};

const useRegisterForm = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
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

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      buttonRef.current?.click();
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    touchedFields,
    useHandleRegister,
    usernameErrorText,
    fetchLoad: isPending,
    buttonRef,
    handlePressEnter
  };
};

export { useRegisterForm };
export type { RegisterData };
