import useCountStore from "../stores/useCounterStore";

function Counter() {
  const { count } = useCountStore();

  return (
    <div>
      <h3>Tasks: {count}</h3>
    </div>
  );
}

export default Counter;
