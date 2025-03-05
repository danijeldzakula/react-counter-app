import { useSyncExternalStore, useState } from 'react';
import { createStore } from 'zustand/vanilla';

export default function LocalScope() {
  const [store] = useState(() =>
    createStore((set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }))
  );

  const count = useSyncExternalStore(store.subscribe, () => store.getState().count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={store.getState().increment}>+</button>
      <button onClick={store.getState().decrement}>-</button>
    </div>
  );
};