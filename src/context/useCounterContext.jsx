import { useContext } from 'react';
import CounterContext from './CounterContext';

const useCounterContext = () => {
  const useStore = useContext(CounterContext);

  if (!useStore) {
    throw new Error(
      'useCounterContext must be used within a CounterProvider'
    );
  }

  return useStore();
};

export default useCounterContext;
