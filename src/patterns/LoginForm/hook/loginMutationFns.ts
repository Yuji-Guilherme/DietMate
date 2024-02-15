import { LoginData } from './useLoginForm';
import { fetchLogin } from '@/services/fetch';

const mutationFn = ({ username, password }: LoginData) => {
  const body = JSON.stringify({ username, password });

  return fetchLogin({ body });
};

export { mutationFn };
