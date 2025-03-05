import { immer } from 'zustand/middleware/immer';
import SalaryContext from './SalaryContext';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialValues = {};

export function SalaryProvider({ children }) {
  const store = create(
    devtools(
      immer(() => ({
        ...initialValues,
      })),
      {
        name: 'SalaryContext',
        trace: true
      }
    )
  )

  return (
    <SalaryContext.Provider value={store}>
      {children}
    </SalaryContext.Provider>
  );
}
