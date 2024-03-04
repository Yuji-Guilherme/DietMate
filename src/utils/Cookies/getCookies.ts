import { cookies } from 'next/headers';

const getCookies = () => {
  const nextTokenCookie = cookies().get('token');
  const nextRefreshCookie = cookies().get('refresh');

  const tokenCookie = nextTokenCookie?.value
    ? `${nextTokenCookie.name}=${nextTokenCookie.value}`
    : '';
  const refreshCookie = nextRefreshCookie?.value
    ? `${nextRefreshCookie.name}=${nextRefreshCookie.value}`
    : '';

  return [tokenCookie, refreshCookie];
};

export { getCookies };
