'use client';

import { getPosts } from '@/network/services/posts';
import { useCatalogStore } from '@/providers/catalogStoreProvider';
import { useConfigStore } from '@/providers/configStoreProvider';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

function CatalogNestedComponnent() {
  const catalogState = useCatalogStore(state => state);
  const state = useConfigStore(state => state);
  const { data } = useQuery({ queryKey: ['posts'], queryFn: getPosts });
  return (
    <div>
      <h3>Catalog Detail</h3>
      <div>{JSON.stringify(catalogState?.product)}</div>
      <hr />
      <h3>House Settings</h3>
      <div>{JSON.stringify(state?.houseIBSetting)}</div>

      <hr />
      <div>
        <h3>From posts</h3>
        <div>{JSON.stringify(data?.posts || {})}</div>
      </div>

      <hr></hr>
      <Link href={'/posts'}>Go to posts</Link>
      <hr></hr>
      <Link href={'/'}>Go to Home</Link>
    </div>
  );
}

export default CatalogNestedComponnent;
