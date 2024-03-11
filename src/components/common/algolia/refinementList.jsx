'use client';

// const CustomRefinementList = () => {
//   return (
//     <RefinementList
//       attribute='supercategoryName'
//       sortBy={['count:desc', 'name:asc']}
//       title='Categories'
//       className='w-25'
//       classNames={{
//         list: 'list-group list-group-flush flex-row',
//         item: 'list-group-item',
//       }}
//     />
//   );
// };

// export default CustomRefinementList;

import { useRefinementList } from 'react-instantsearch';
import InnerRefinementList from './innerRefinementList';

export default function CustomRefinementList(props) {
  const { items, refine } = useRefinementList(props);
  return (
    <>
      <ul className='list-group'>
        {items.map(item => (
          <li key={item.label} className='list-group-item'>
            <label>
              <input type='checkbox' checked={item.isRefined} onChange={() => refine(item.value)} />
              <span>{item.label}</span>
              <span className='badge badge-pill'>({item.count})</span>
            </label>
            {/* <RefinementList
              attribute={item.label}
              sortBy={['count:desc', 'name:asc']}
              title='Categories'
              classNames={{
                list: 'list-group list-group-flush',
                item: 'list-group-item ml-2',
              }}
            /> */}
            <InnerRefinementList attribute={item.label} sortBy={['count:desc', 'name:asc']} />
          </li>
        ))}
      </ul>
    </>
  );
}
