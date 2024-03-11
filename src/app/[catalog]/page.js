export const dynamic = 'force-dynamic';

import CatalogNestedComponnent from '@/components/catalog/CatalogNestedComponnent';
import LotList from '@/components/common/algolia/lot-list';
import { CatalogStoreProvider } from '@/providers/catalog/provider';
import { getCatalog } from '@/services/catalog';

const Catalog = async ({ params }) => {
  const filters = `catalogRef:${params.catalog}`;
  const data = await getCatalog();
  return (
    <>
      <CatalogStoreProvider serverState={{ product: data }}>
        <h1>Catalog: {params.catalog}</h1>
        <LotList filters={filters}></LotList>
        <CatalogNestedComponnent />
      </CatalogStoreProvider>
    </>
  );
};

export default Catalog;
