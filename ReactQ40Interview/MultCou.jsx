import React, { useState } from 'react'

const MultCou = () => {

    const [count, setCount] = useState([
        {id : 1, value : 0},
        {id : 2, value : 0},
        {id : 3, value : 0}
    ])

    const handleAdd = (id) => {
        setCount(prev => {
            return prev.map(c => (
                c.id === id ? {...c, value : c.value + 1} : c
            ))
        })
    }
    const handleReduce = (id) => {
        setCount(prev => {
            return prev.map(c => (
                c.id === id ? {...c, value : c.value - 1} : c
            ))
        })
    }

    const handleReset = (id) => {
        setCount(prev => {
            return prev.map(c => (
                c.id === id ? {...c, value : 0} : c
            ))
        })
    } 


  return (
    <div>
      <h1>Multiple Counters</h1>
      
      {count.map((counter) => (
        <div key={counter.id}>
            <h2>Counter : {counter.id} : {counter.value}</h2>
            <button onClick={() => handleAdd(counter.id)}>Add</button>
            <button onClick={() => handleReduce(counter.id)}>Reduce</button>
            <button onClick={() => handleReset(counter.id)}>Reset</button>
        </div>
      ))
        
      }
    </div>
  )
}

export default MultCou
