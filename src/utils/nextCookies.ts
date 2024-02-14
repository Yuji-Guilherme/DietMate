import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

const hourInMilliseconds = 3600000;
const weekInMilliseconds = 7 * 24 * hourInMilliseconds;
const cookieOptions: Partial<ResponseCookie> = { httpOnly: true, secure: true };

const setCookies = (cookiesArr: string[]) => {
  const [tokenName, tokenValue] = cookiesArr[0].split(';')[0].split('=');
  const [refreshName, refreshValue] = cookiesArr[1].split(';')[0].split('=');

  cookies().set(tokenName, tokenValue, {
    ...cookieOptions,
    maxAge: hourInMilliseconds
  });
  cookies().set(refreshName, refreshValue, {
    ...cookieOptions,
    maxAge: weekInMilliseconds
  });
};

const getCookies = () => {
  const nextCookies = cookies().getAll();

  const tokenCookie = `${nextCookies[0].name}=${nextCookies[0].value}`;
  const refreshCookie = `${nextCookies[1].name}=${nextCookies[1].value}`;

  return [tokenCookie, refreshCookie];
};

export { setCookies, getCookies };
