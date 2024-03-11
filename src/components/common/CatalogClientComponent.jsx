'use client';
import { useConfigStore } from '@/providers/configStoreProvider';

function CatalogClientComponent() {
  const state = useConfigStore(state => state);
  return <div>{JSON.stringify(state)}</div>;
}

export default CatalogClientComponent;
