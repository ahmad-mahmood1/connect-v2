import React from 'react';
import FancyText from './fancyText';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

const FancyTextWrapper = () => {
  return (
    <>
      <Suspense fallback={<Skeleton count={5} />}>
        <FancyText></FancyText>
        <FancyText></FancyText>
        <FancyText></FancyText>
        <FancyText></FancyText>
      </Suspense>
    </>
  );
};

export default FancyTextWrapper;
