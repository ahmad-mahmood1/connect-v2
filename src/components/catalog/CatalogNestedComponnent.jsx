'use client';

import { useConfigStore } from '@/providers/appConfig/provider';
import { useCatalogStore } from '@/providers/catalog/provider';
import Link from 'next/link';

function CatalogNestedComponnent() {
  const catalogState = useCatalogStore(state => state);
  const state = useConfigStore(state => state);
  return (
    <div>
      <h3>Catalog Detail</h3>
      <div>{JSON.stringify(catalogState?.product)}</div>
      <hr />
      <h3>House Settings</h3>
      <div>{JSON.stringify(state?.houseIBSetting)}</div>

      <hr />
      <Link href={'/'}>Go to Home</Link>
    </div>
  );
}

export default CatalogNestedComponnent;
