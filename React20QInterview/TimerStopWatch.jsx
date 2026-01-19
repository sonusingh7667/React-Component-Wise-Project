import React, { useEffect, useState } from 'react'

const TimerStopWatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);


  return (
    <div>
      <h1>Stopwatch</h1>

      <h2>Time: {seconds} sec</h2>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => {
        setIsRunning(false);
        setSeconds(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default TimerStopWatch
