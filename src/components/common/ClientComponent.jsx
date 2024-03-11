'use client';

import { useConfigStore } from '@/providers/configStoreProvider';

function ClientComponent() {
  const state = useConfigStore(state => state);

  return (
    <div>
      <h2>Client Comp</h2>
      <hr />
      <div>
        <h3>House Settings:</h3>
        {JSON.stringify(state?.houseIBSetting || {})}
      </div>
    </div>
  );
}

export default ClientComponent;
