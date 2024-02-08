import { useCustomForm } from '@/hook/useCustomForm';
import { registerSchema as schema } from '@/schemas/registerSchema';

const useRegisterForm = () => {
  const { register, handleSubmit, errors, touchedFields } = useCustomForm({
    schema,
    mode: 'onBlur'
  });

  return {
    register,
    handleSubmit,
    errors,
    touchedFields
  };
};

export { useRegisterForm };
