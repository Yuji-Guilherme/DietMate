'use server';

import { getCookies } from '@/utils/cookies';

const userIsLogged = async () => {
  const refreshToken = getCookies()[1];

  return !!refreshToken;
};

export { userIsLogged };
