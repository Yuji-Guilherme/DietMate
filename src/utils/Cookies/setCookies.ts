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

export { setCookies };
