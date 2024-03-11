import { createStore } from 'zustand/vanilla';

const defaultConfigStore = () => {
  return { lotDetail: null };
};

export const defaultInitState = {
  dateInit: null,
};

export const initializeCatalogStore = (preloadedState = {}) => {
  return createStore()(set => ({
    ...defaultConfigStore(),
    ...preloadedState,
  }));
};
