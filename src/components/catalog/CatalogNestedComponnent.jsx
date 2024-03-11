'use client';

import { useCatalogStore } from '@/providers/catalogStoreProvider';
import { useConfigStore } from '@/providers/configStoreProvider';
import Link from 'next/link';

function CatalogNestedComponnent() {
  const state = useCatalogStore(state => state);
  const houseSettings = useConfigStore(state => state);
  return (
    <div>
      <div>Lot Detail</div>
      <div>{JSON.stringify(state)}</div>
      <hr />
      <div>House Settings</div>
      <div>{JSON.stringify(houseSettings)}</div>

      <Link href={'/test'}>Go to test</Link>
    </div>
  );
}

export default CatalogNestedComponnent;
