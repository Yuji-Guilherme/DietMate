import { cookies } from 'next/headers';

const clearCookies = () => {
  cookies().delete('token');
  cookies().delete('refresh');
};

export { clearCookies };
