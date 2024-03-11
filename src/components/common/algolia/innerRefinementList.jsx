'use client';

import React from 'react';
import { useRefinementList } from 'react-instantsearch';

export default function InnerRefinementList(props) {
  const { items, refine } = useRefinementList(props);

  return (
    <>
      <ul className='list-group list-group-flush'>
        {items.map(item => (
          <li key={item.label} className='list-group-item ml-2'>
            <label>
              <input type='checkbox' checked={item.isRefined} onChange={() => refine(item.value)} />
              <span>{item.label}</span>
              <span className='badge badge-pill'>({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
