export const dynamic = 'force-dynamic';

import ClientComponent from '@/components/common/ClientComponent';
import Elements from '@/components/common/elements';
import FancyTextWrapper from '@/components/common/fancyTextWrapper';
import LateStreamingComponent from '@/components/common/lateStreamingComponent';
import { getRandomQuote } from '@/network/services';
import Link from 'next/link';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import ServerCompA from './serverCompA';
import ServerCompB from './serverCompB';

const Test = async () => {
  const randomQuote = await getRandomQuote();

  return (
    <>
      <div className='mb-5'>
      <ServerCompA/>
      <ServerCompB/>
      </div>
      {/* <div className='mb-5'>
        <h4>
          Following data is fetched 4 times in separate component, but we use same api endpoint. This shows that the
          response of this api will be cached for route request life.
        </h4>
        {/* <Suspense fallback={<span>loading main fancy wrapper</span>}> */}
        {/* <FancyTextWrapper /> */}
        {/* </Suspense> */}
      {/* </div> */}
      {/* <div className='mb-5'>
        <Suspense fallback={<Skeleton count={2} />}>
          <LateStreamingComponent></LateStreamingComponent>
        </Suspense>
      </div>

      <Elements />

      <Link href='/'>Go to /</Link>
    <hr/>
      <Link href='/test/routeA'>Go to Route A </Link>
    <hr/>
      <Link href='/test/routeB'>Go to Route B </Link> */} 
    </>
  );
};

export default Test;
