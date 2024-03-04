import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

const hourInMilliseconds = 3600000;
const weekInMilliseconds = 7 * 24 * hourInMilliseconds;
const cookieOptions: Partial<ResponseCookie> = { httpOnly: true, secure: true };

const setCookies = (cookiesArr: string[]) => {
  const tokenValue = cookiesArr[0].split(';')[0].split('=')[1];
  const refreshValue = cookiesArr[1].split(';')[0].split('=')[1];

  cookies().set('token', tokenValue, {
    ...cookieOptions,
    maxAge: hourInMilliseconds
  });
  cookies().set('refresh', refreshValue, {
    ...cookieOptions,
    maxAge: weekInMilliseconds
  });
};

export { setCookies };
