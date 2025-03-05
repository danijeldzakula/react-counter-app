import useCounterContext from "../../../context/useCounterContext";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterContext();

  return (
    <div>
      <h3>Count: {count}</h3>

      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
      <button type="button" onClick={reset}>Reset</button>
    </div>
  )
}
