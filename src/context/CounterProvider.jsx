import { immer } from 'zustand/middleware/immer';
import CounterContext from './CounterContext';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialValues = {
  count: 0, 
};

export function CounterProvider({ children }) {
  const store = create(
    devtools(
      immer((set) => ({
        ...initialValues,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set((state) => ({ ...state, ...initialValues }))
      })),
      {
        name: 'CounterContext',
        trace: true
      }
    )
  )

  return (
    <CounterContext.Provider value={store}>
      {children}
    </CounterContext.Provider>
  );
}
