import { useCustomForm } from '@/hook/useCustomForm';
import { loginSchema as schema } from '@/schemas/loginSchema';
import { useMutation } from '@tanstack/react-query';
import { mutationFn } from './loginMutationFns';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

type LoginData = {
  username: string;
  password: string;
};

const useLoginForm = () => {
  const { register, handleSubmit } = useCustomForm({
    schema,
    mode: 'onSubmit'
  });

  const fiveSecondsInMilliseconds = 5000;

  const onError = async () => {
    setTimeout(() => {
      reset();
    }, fiveSecondsInMilliseconds);
  };

  const { mutate, isError, isSuccess, isPending, reset } = useMutation({
    mutationKey: ['login'],
    mutationFn
  });

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

  return {
    register,
    handleSubmit,
    useHandleLogin,
    isError,
    fetchLoad: isPending
  };
};

export { useLoginForm };
export type { LoginData };
