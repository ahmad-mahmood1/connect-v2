export const dynamic = 'force-dynamic';

import ClientComponent from '@/components/common/ClientComponent';
import Link from 'next/link';
import styles from './page.module.scss';

export default async function Home() {
  return (
    <main className={styles.main}>
      <ClientComponent />
      {/* <Link href='/test'>Go to test</Link> */}
      <Link href='/1'>Go to catalog</Link>
    </main>
  );
}
