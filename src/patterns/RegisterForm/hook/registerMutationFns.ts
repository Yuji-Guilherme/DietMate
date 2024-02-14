import type { RegisterData } from './useRegisterForm';
import { redirect } from 'next/navigation';
import { fetchRegister } from '@/services/fetch';

const mutationFn = ({ username, password }: Partial<RegisterData>) => {
  const body = JSON.stringify({ username, password });

  return fetchRegister('user', { body });
};

const onSuccess = () => {
  redirect('/dashboard');
};

export { onSuccess, mutationFn };
