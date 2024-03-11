import React from 'react';

const LateStreamingComponent = async () => {
  const waitedValue = await new Promise((res, rej) => {
    setTimeout(() => {
      res('This sample text is rendered after 5 seconds waiting on server side');
    }, 5000);
  });

  return <h4>{waitedValue}</h4>;
};

export default LateStreamingComponent;
