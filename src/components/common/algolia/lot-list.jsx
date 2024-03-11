'use client';

import algoliasearch from 'algoliasearch/lite';
import { Configure } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { CustomHits } from './custom-hit';
import CustomPagination from './customPagination';
import CustomRefinementList from './refinementList';
// import 'instantsearch.css/themes/satellite.css';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

// const LazyLoadedAlgoliaPagination = lazy(() => import('./customPagination'));
// const LazyLoadedAlgoliaRefinementList = lazy(() => import('./refinementList'));

const searchClient = algoliasearch('0HJBNDV358', 'a6be55aa1cd3d45ca9c50cb59544ba4c');

const indexName = 'upcoming_lots_lotNumber_asc_stage';

const LotList = ({ filters }) => {
  const instantSearchCustomRouting = useMemo(() => {
    const routing = {
      router: {
        push: function push(url) {
          // This is to skip the push with empty routeState on dispose as it would clear params set on a <Link>
          if (this.isDisposed) {
            return;
          }
          const isClientSide = typeof window !== 'undefined';

          // This is for disabling the browser's own navigation (back btn) when URL changes to run streaming
          //  correctly without the error : https://github.com/algolia/instantsearch/issues/5987
          // isClientSide ? history.replaceState({}, '', url) : router.push(url, { scroll: false });
          // history.replaceState({}, '', url);

          // This is to update the URL state (i.e. query params) without rendering the RSC again
          history.pushState({}, '', url);

          // This is the default InstantSearchNext way to manipulate the URL but it will rerender RSC again
          // router.push(url, { scroll: false });
        },
      },
    };

    return routing;
  }, []);

  const attributesToRetrieve = [
    'lotTitle',
    'lotNumber',
    'lotRef',
    'photoPath',
    'priceResult',
    'estimateLow',
    'estimateHigh',
    'currentBid',
    'bidCount',
    'categoryName',
    'subcategoryName',
    'supercategoryName',
  ];

  return (
    <div>
      <div>
        <InstantSearchNext
          indexName={indexName}
          searchClient={searchClient}
          future={{
            preserveSharedStateOnUnmount: true,
          }}
          routing={instantSearchCustomRouting}
        >
          <Configure filters={filters} attributesToRetrieve={attributesToRetrieve} />
          {/* <Suspense fallback={<div>Loading Refinement...</div>}>
            <LazyLoadedAlgoliaRefinementList></LazyLoadedAlgoliaRefinementList>
          </Suspense> */}

          <div className='Container'>
            <div className='row'>
              <div className='col'>
                <CustomRefinementList attribute={'supercategoryName'} sortBy={['count:desc', 'name:asc']} />
              </div>
              <div className='col-9 border border-secondary'>
                {/* <div className="card-columns">
            <Hits hitComponent={Hit} />
          </div> */}

                <CustomHits />
                <div className='row justify-content-md-center'>
                  <CustomPagination />
                </div>
                {/* <Suspense fallback={<div>Loading. Pagination..</div>}>
              <LazyLoadedAlgoliaPagination></LazyLoadedAlgoliaPagination>
            </Suspense> */}
              </div>
            </div>
          </div>
        </InstantSearchNext>
      </div>
    </div>
  );
};

export default LotList;
