// 'use client';

import { useState } from 'react';

const Card = ({ serverProp }) => {
  const [initialVal, setInitialVal] = useState('initial value');
  // useEffect(() => {
  //   // setInitialVal('helloooooooo after rendering....');

  //   const testFn = async () => {
  //     const randomData = await getRandomData();
  //     setInitialVal(JSON.stringify(randomData));
  //   };

  //   testFn();
  // }, []);

  return (
    <>
      <div>card testing on client</div>
      <div>{initialVal}</div>
      <div>{serverProp}</div>
    </>
  );
};

export default Card;
