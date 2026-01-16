import React, { useState } from "react";

const aaa = function CounterC() {

    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount(count + 1);
    }

    const Decrease = ()=> {
        setCount(count - 1);
    }

    const Reset = () => {
        setCount(0);
    }


  return (
    <div>
      <h1>Counter Component</h1>
      <h2>{count}</h2>
      <button onClick={Increase}>Add</button>
      <button onClick={Decrease}>Reduce</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default aaa;
