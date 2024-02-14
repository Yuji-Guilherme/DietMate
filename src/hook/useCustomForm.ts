import { useForm, Mode } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

type UseCustomFormParams = {
  schema: z.ZodType;
  mode: Mode;
};

const useCustomForm = ({ schema, mode }: UseCustomFormParams) => {
  type FormProps = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields }
  } = useForm<FormProps>({
    mode,
    resolver: zodResolver(schema)
  });

  return {
    register,
    handleSubmit,
    errors,
    touchedFields,
    watch
  };
};

export { useCustomForm };
