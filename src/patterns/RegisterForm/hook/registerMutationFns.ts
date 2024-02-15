import type { RegisterData } from './useRegisterForm';
import { fetchRegister } from '@/services/fetch';

const mutationFn = ({ username, password }: Partial<RegisterData>) => {
  const body = JSON.stringify({ username, password });

  return fetchRegister({ body });
};

export { mutationFn };
