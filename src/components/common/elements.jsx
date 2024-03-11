import React from 'react';

import styles from './elements.module.css';
import Link from 'next/link';

const Elements = () => {
  return (
    <div>
      <a
        href='/auction-catalog/justin-testing-timed_SD7OB05UBD'
        role='button'
        className={`btn btn-primary ${styles.btn}`}
      >
        Explore Auction
      </a>
      {/* <Link href='/catalog/KATI5LL1HI'> Go To hardcoded Catalog Page</Link> */}
    </div>
  );
};

export default Elements;
