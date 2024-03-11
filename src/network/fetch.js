import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

export const baseFetch = url => wretch(url).addon(QueryStringAddon).errorType('json');

export async function customFetch({ url, method = 'get', headers = {}, options = {}, query, data }) {
  try {
    let api = wretch(url)
      .addon(QueryStringAddon)
      .errorType('json')
      .headers({ ...headers })
      .options({ ...options })
      .query(query);

    let res = await api[method.toLowerCase()](data ?? undefined).res(res => {
      console.log('===  res:', res.headers.get('content-type'));
      return res.json();
    });

    return res;
  } catch (error) {
    const message =
      typeof error.message === 'object' && Object.keys(error.message).length > 0
        ? JSON.stringify(error.message)
        : error?.message;
    throw new Error(`${message}`);
  }
}
