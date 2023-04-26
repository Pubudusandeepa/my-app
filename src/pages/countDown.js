import React, { useState } from "react";

const CountDown = () => {
  const [count, setCount] = useState(0);

  const incrementValue = () => {
    setCount(count + 4);
  };

  const decrementValue = () => {
    setCount(count - 4);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexDirection: "space-between" }}>
        <p>count: {count}</p>
        <button
          style={{ background: "light-blue", padding: "5px" }}
          onClick={() => incrementValue()}
        >
          Increment
        </button>
        <button style={{ background: "red" }} onClick={() => decrementValue()}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CountDown;
