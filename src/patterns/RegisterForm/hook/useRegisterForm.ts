import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema as schema, FormProps } from '@/schemas/registerSchema';

const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields }
  } = useForm<FormProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  });

  return {
    register,
    handleSubmit,
    errors,
    touchedFields
  };
};

export { useRegisterForm };
