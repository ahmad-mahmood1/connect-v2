export const dynamic = 'force-dynamic';

import Elements from '@/components/common/elements';
import FancyTextWrapper from '@/components/common/fancyTextWrapper';
import LateStreamingComponent from '@/components/common/lateStreamingComponent';
import Link from 'next/link';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import ServerCompA from './serverCompA';
import ServerCompB from './serverCompB';

const Test = async () => {
  return (
    <>
      <div className='mb-5'>
        <ServerCompA />
        <ServerCompB />
      </div>
      <div className='mb-5'>
        <h4>
          Following data is fetched 4 times in separate component, but we use same api endpoint. This shows that the
          response of this api will be cached for route request life.
        </h4>
        <Suspense fallback={<span>loading main fancy wrapper</span>}>
          <FancyTextWrapper />
        </Suspense>
      </div>
      <div className='mb-5'>
        <Suspense fallback={<Skeleton count={2} />}>
          <LateStreamingComponent></LateStreamingComponent>
        </Suspense>
      </div>

      <Elements />

      <Link href='/'>Go to /</Link>
      <hr />
    </>
  );
};

export default Test;
