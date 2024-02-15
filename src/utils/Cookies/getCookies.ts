import { cookies } from 'next/headers';

const getCookies = () => {
  const nextCookies = cookies().getAll();

  const tokenCookie = `${nextCookies[0].name}=${nextCookies[0].value}`;
  const refreshCookie = `${nextCookies[1].name}=${nextCookies[1].value}`;

  return [tokenCookie, refreshCookie];
};

export { getCookies };
