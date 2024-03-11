import { getRandomData } from '@/network/services';
import { createStore } from 'zustand/vanilla';

const defaultConfigStore = () => {
  return { count: 0 };
};

export const defaultInitState = {
  dateInit: null,
};

export const initializeConfigStore = (preloadedState = {}) => {
  return createStore()(set => ({
    ...defaultConfigStore(),
    ...preloadedState,
    updateCount: () => set(state => ({ count: state.count + 1 })),
    addRandomData: async () => {
      let data = await getRandomData();
      set(_ => ({
        randomData: data,
      }));
    },
  }));
};
