const baseURL = process.env.API_URL;

async function fetchPost<T = unknown>(
  url: string | URL | Request,
  body: BodyInit,
  headers?: HeadersInit | undefined
) {
  const resultData = await fetch(`${baseURL}/${url}`, {
    method: 'POST',
    body,
    headers
  });
  const result = resultData.json();

  return result as T;
}

export { fetchPost };
