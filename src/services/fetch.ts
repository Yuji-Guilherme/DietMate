'use server';

import { getCookies, setCookies, clearCookies } from '@/utils/cookies';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const registerUrl = `${baseURL}/user`;
const loginUrl = `${baseURL}/auth`;
const logoutUrl = `${baseURL}/auth/logout`;
const refreshUrl = `${baseURL}/auth/refresh`;

type FetchUrl = string | URL | Request;
type FetchInit = RequestInit | undefined;

const fetchRegister = async (init: FetchInit) => {
  const resultData = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    ...init
  });
  const result = await resultData.json();

  if (!result.user) throw new Error('Error create user');

  await fetchLogin({ ...init });
};

const fetchLogin = async (init: FetchInit) => {
  const resultData = await fetch(loginUrl, {
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

const fetchLogout = async (init?: FetchInit) => {
  const refreshToken = getCookies()[1];

  await fetch(logoutUrl, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Cookie: refreshToken
    },
    ...init
  });

  clearCookies();
};

const get = async (url: FetchUrl, nextConfig?: NextFetchRequestConfig) => {
  const accessToken = getCookies()[0];
  const completeUrl = `${baseURL}/${url}`;

  try {
    const resultData = await fetch(completeUrl, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: accessToken
      },
      next: nextConfig
    });

    const result = await resultData.json();

    return result;
  } catch (e) {
    console.log(e);
  }
};

const getNewToken = async () => {
  const refreshToken = getCookies()[1];

  try {
    const resultData = await fetch(refreshUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: refreshToken
      }
    });

    const fetchCookie = resultData.headers.getSetCookie();

    setCookies(fetchCookie);
  } catch (e) {
    console.log(e);
  }
};

export { fetchRegister, fetchLogin, fetchLogout, get, getNewToken };
