import { useCustomForm } from '@/hook/useCustomForm';
import { loginSchema as schema } from '@/schemas/loginSchema';
import { useMutation } from '@tanstack/react-query';
import { mutationFn } from './loginMutationFns';
import { redirect } from 'next/navigation';
import { useEffect, useRef, type KeyboardEvent } from 'react';

type LoginData = {
  username: string;
  password: string;
};

const useLoginForm = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fiveSecondsInMilliseconds = 5000;

  const { register, handleSubmit } = useCustomForm({
    schema,
    mode: 'onSubmit'
  });

  const { mutate, isError, isSuccess, isPending, reset } = useMutation({
    mutationKey: ['login'],
    mutationFn
  });

  const onError = async () => {
    setTimeout(() => {
      reset();
    }, fiveSecondsInMilliseconds);
  };

  const useHandleLogin = async (data: LoginData) => {
    mutate(
      { username: data.username, password: data.password },
      {
        onError
      }
    );
  };

  useEffect(() => {
    if (isSuccess) {
      redirect('/dashboard');
    }
  }, [isSuccess]);

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      buttonRef.current?.click();
    }
  };

  return {
    register,
    handleSubmit,
    useHandleLogin,
    isError,
    fetchLoad: isPending,
    buttonRef,
    handlePressEnter
  };
};

export { useLoginForm };
export type { LoginData };
