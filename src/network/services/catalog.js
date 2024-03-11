import { customFetch } from '../fetch';

export const getCatalog = async () => {
  const data = await customFetch({
    url: `https://dummyjson.com/products/1`,
    query: {
      limit: 2,
    },
    options: { cache: 'no-store' },
  });

  console.log('===product  data:', data);
  return data;
};
