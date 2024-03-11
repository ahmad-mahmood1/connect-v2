'use client';

import { useConfigStore } from '@/providers/configStoreProvider';

function ClientComponent() {
  const { count, updateCount, ...state } = useConfigStore(state => state);

  return (
    <div>
      <h3>Client Comp</h3>
      <div>Data fetched on server and accessed via zustand store preinitialized on server as well</div>
      <div>
        House Info: {state.sellerName} {state.connectType} {state.sellerId}{' '}
      </div>
      <div>
        House Settings:
        {JSON.stringify(state.houseIBSetting || {})}
      </div>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
}

export default ClientComponent;
