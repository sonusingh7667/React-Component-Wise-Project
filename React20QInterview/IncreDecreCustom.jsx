import { useState } from "react";
import React from "react";

const IncreDecreCustom = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + Number(step));
  };

  const handleDecrement = () => {
    setCount((prev) => prev - Number(step));
  };

  return (
    <div>
      <h1>Custom Increment / Decrement Counter</h1>

      <h2>Count: {count}</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
        placeholder="Enter step value"
      />

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default IncreDecreCustom;
