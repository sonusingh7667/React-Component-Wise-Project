import React, { useState } from 'react';

const MultipleCounter = () => {

const [count, setCount] = useState([
    {id:1, value:0},
    {id:2, value:0},
    {id:3, value:0},
]);

//Add
const handleAdd = (id) => {
    setCount(prev => {
       return prev.map(c => {
           return c.id === id ? {...c, value : c.value + 1 } : c
        })
    })
}


//Reduce

const handleReduce = (id) =>{
    setCount(prev => {
       return prev.map(c => {
           return c.id === id ? {...c, value : c.value - 1 } : c
        })
    })
}

//Reset

const handleReset = (id) =>{
    setCount(prev => {
       return prev.map(c => {
           return c.id === id ? {...c, value : 0 } : c
        })
    })
}



  return (
    <div>
      <h1>Multiple Counters</h1>

      {count.map(counter => (
        <div key={counter.id}>
            <h2>Counter : {counter.id} : {counter.value}</h2>
            <button onClick={() => handleAdd(counter.id)}>Add</button>
            <button onClick={() => handleReduce(counter.id)}>Reduce</button>
            <button onClick={() => handleReset(counter.id)}>Reset</button>
        </div>
      ))}
    
    </div>
  );
};

export default MultipleCounter;
