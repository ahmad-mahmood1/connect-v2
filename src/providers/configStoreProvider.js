'use client';

import { initializeConfigStore } from '@/stores/zustand/configStore';
import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

const ConfigStoreContext = createContext(null);

export const ConfigStoreProvider = ({ children, serverState = {} }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = initializeConfigStore(serverState);
  }
  return <ConfigStoreContext.Provider value={storeRef.current}>{children}</ConfigStoreContext.Provider>;
};

export const useConfigStore = selector => {
  const configStoreContext = useContext(ConfigStoreContext);

  if (!configStoreContext) {
    throw new Error(`useConfigStore must be use within ConfigStoreProvider`);
  }

  return useStore(configStoreContext, selector);
};
