import { customFetch } from '../fetch';

export const getPosts = async () => {
  const data = await customFetch({
    url: `https://dummyjson.com/posts`,
    query: {
      limit: 2,
    },
    options: { cache: 'no-store' },
  });

  return data;
};

export const getComments = async () => {
  const data = await customFetch({
    url: `https://dummyjson.com/comments`,
    query: {
      limit: 5,
    },
    options: { cache: 'no-store' },
  });

  return data;
};
