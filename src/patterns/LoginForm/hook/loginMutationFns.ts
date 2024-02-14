import { LoginData } from './useLoginForm';
import { redirect } from 'next/navigation';
import { fetchLogin } from '@/services/fetch';

const mutationFn = ({ username, password }: LoginData) => {
  const body = JSON.stringify({ username, password });

  return fetchLogin('auth', { body });
};

const onSuccess = () => {
  redirect('/dashboard');
};

export { mutationFn, onSuccess };
