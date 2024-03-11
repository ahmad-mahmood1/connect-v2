export const dynamic = 'force-dynamic';
export const fetchCache = 'default-cache';

import CatalogNestedComponnent from '@/components/catalog/CatalogNestedComponnent';
import LotList from '@/components/common/algolia/lot-list';
import { getRandomData } from '@/network/services';
import { CatalogStoreProvider } from '@/providers/catalogStoreProvider';

const Catalog = async ({ params }) => {
  const filters = `catalogRef:${params.catalog}`;
  const randomData = await getRandomData();
  return (
    <>
      <CatalogStoreProvider serverState={{ lotDetail: { title: 'New Lot', ...randomData } }}>
        <h1>Catalog: {params.catalog}</h1>
        <LotList filters={filters}></LotList>
        <CatalogNestedComponnent />
      </CatalogStoreProvider>
    </>
  );
};

export default Catalog;
