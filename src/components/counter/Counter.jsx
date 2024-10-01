import { useShallow } from 'zustand/shallow';
import { useCounterStore } from '../../store/useCounterStore';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore(
    useShallow((state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
      reset: state.reset,
    }))
  );
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
