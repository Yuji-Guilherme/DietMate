import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const verifyLogged = () => {
  const refreshToken = cookies().get('refresh');

  return !!refreshToken;
};

const verifyLoggedAndRedirect = () => {
  if (verifyLogged()) {
    redirect('/dashboard');
  }
};

export { verifyLogged, verifyLoggedAndRedirect };
