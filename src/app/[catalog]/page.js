export const dynamic = 'force-dynamic';

import CatalogNestedComponnent from '@/components/catalog/CatalogNestedComponnent';
import { getCatalog } from '@/network/services/catalog';
import { CatalogStoreProvider } from '@/providers/catalogStoreProvider';

const Catalog = async ({ params }) => {
  const filters = `catalogRef:${params.catalog}`;
  const data = await getCatalog();
  return (
    <>
      <CatalogStoreProvider serverState={{ product: data }}>
        <h1>Catalog: {params.catalog}</h1>
        {/* <LotList filters={filters}></LotList> */}
        <CatalogNestedComponnent />
      </CatalogStoreProvider>
    </>
  );
};

export default Catalog;
