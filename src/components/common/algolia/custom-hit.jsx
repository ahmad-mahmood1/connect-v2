'use client';

import React, { memo } from 'react';
import { useHits } from 'react-instantsearch';

export const CustomHits = memo(function CustomHits() {
  const { hits } = useHits();

  return (
    <>
      <div className='card-columns'>
        {hits.map(hit => {
          return (
            <div key={hit.lotRef} className='card p-2 m-2'>
              <div>lotRef: {hit.lotRef}</div>
              <div>currentBid: {hit.currentBid}</div>
              <div>lotTitle: {hit.lotTitle}</div>
              <div>houseName: {hit.houseName}</div>
            </div>
          );
        })}
      </div>
    </>
  );
});
