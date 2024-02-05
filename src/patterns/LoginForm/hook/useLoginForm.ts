import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema as schema,
  RegisterFormProps as FormProps
} from '@/schemas/registerSchema';

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'onSubmit',
    resolver: zodResolver(schema)
  });

  return {
    register,
    handleSubmit,
    errors
  };
};

export { useLoginForm };
