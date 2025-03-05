import { useContext } from 'react';
import SalaryContext from './SalaryContext';

const useSalaryContext = () => {
  const useStore = useContext(SalaryContext);

  if (!useStore) {
    throw new Error(
      'useSalaryContext must be used within a SalaryProvider'
    );
  }

  return useStore();
};

export default useSalaryContext;
