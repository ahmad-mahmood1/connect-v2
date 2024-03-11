export const dynamic = 'force-dynamic';

import ClientComponent from '@/components/common/ClientComponent';
import styles from './page.module.scss';

export default async function Home() {
  return (
    <main className={styles.main}>
      <ClientComponent />
      {/* <Link href='/test'>Go to test</Link> */}
      {/* <Link href='/1' prefetch={false}>
        Go to catalog
      </Link> */}
    </main>
  );
}
