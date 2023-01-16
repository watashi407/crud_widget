import { useState } from "react";

const Counter = (getData, data) => {
  const [count, setCount] = useState(0);

  const CountPrev = () => {
    setCount(count + 1);
  };

  const CountNex = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={CountPrev}>prev</button>
      <h1>{`PAGE ${count}`}</h1>
      <button onClick={CountNex}>prev</button>
    </>
  );
};

export default Counter;
