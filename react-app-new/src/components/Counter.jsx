import { useState } from "react";
import "../index.css";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="counter">Current Count: {count}</p>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
