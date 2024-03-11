'use client';

import { Pagination } from 'react-instantsearch';

const CustomPagination = () => {
  return (
    <Pagination
      showFirst={false}
      padding={2}
      className='test'
      classNames={{
        list: 'pagination',
        item: 'page-item',
        link: 'page-link',
        selectedItem: 'active',
      }}
    />
  );
};

export default CustomPagination;
