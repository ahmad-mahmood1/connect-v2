'use client';

import { initializeCatalogStore } from '@/stores/catalogStore';
import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

const CatalogStoreContext = createContext(null);

export const CatalogStoreProvider = ({ children, serverState = {} }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = initializeCatalogStore(serverState);
  }
  return <CatalogStoreContext.Provider value={storeRef.current}>{children}</CatalogStoreContext.Provider>;
};

export const useCatalogStore = selector => {
  const catalogStoreContext = useContext(CatalogStoreContext);

  if (!catalogStoreContext) {
    throw new Error(`useCatalogStore must be use within CatalogStoreProvider`);
  }

  return useStore(catalogStoreContext, selector);
};
