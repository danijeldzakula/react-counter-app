import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useCounterStore = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count -1 })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: 'counter-storage',
      }
    ),
    {
      name: 'CounterStorage',
    }
  )
);
