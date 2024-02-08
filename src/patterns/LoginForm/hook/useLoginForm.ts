import { useCustomForm } from '@/hook/useCustomForm';
import { loginSchema as schema } from '@/schemas/loginSchema';

const useLoginForm = () => {
  const { register, handleSubmit, errors } = useCustomForm({
    schema,
    mode: 'onSubmit'
  });

  return {
    register,
    handleSubmit,
    errors
  };
};

export { useLoginForm };
