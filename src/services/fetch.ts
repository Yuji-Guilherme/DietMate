'use server';

import { getCookies, setCookies } from '@/utils/nextCookies';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

type FetchUrl = string | URL | Request;
type FetchInit = RequestInit | undefined;

const fetchRegister = async (url: FetchUrl, init: FetchInit) => {
  const completeUrl = `${baseURL}/${url}`;

  const resultData = await fetch(completeUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    ...init
  });
  const result = await resultData.json();

  if (!result.user) throw new Error('Error create user');

  await fetchLogin('auth', { ...init });
};

const fetchLogin = async (url: FetchUrl, init: FetchInit) => {
  const completeUrl = `${baseURL}/${url}`;

  const resultData = await fetch(completeUrl, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    ...init
  });

  const result = await resultData.json();

  if (result.message === 'Incorrect user or password') throw new Error();

  const fetchCookie = resultData.headers.getSetCookie();

  setCookies(fetchCookie);
};

const get = async (url: FetchUrl) => {
  const accessToken = getCookies()[0];
  const completeUrl = `${baseURL}/${url}`;

  try {
    const resultData = await fetch(completeUrl, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: accessToken
      }
    });

    const result = await resultData.json();

    return result;
  } catch (e) {
    console.log(e);
  }
};

export { fetchRegister, fetchLogin, get };
