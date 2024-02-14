import { useMutation } from '@tanstack/react-query';
import { useCustomForm } from '@/hook/useCustomForm';
import { loginSchema as schema } from '@/schemas/loginSchema';
import { mutationFn, onSuccess } from './loginMutationFns';

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

  const onError = () => {
    setTimeout(() => {
      reset();
    }, fiveSecondsInMilliseconds);
  };

  const { mutate, isError, isPending, reset } = useMutation({
    mutationKey: ['login'],
    mutationFn,
    onError,
    onSuccess
  });

  const useHandleLogin = async (data: LoginData) => {
    mutate({ username: data.username, password: data.password });
  };

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
