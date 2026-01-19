import React, { useRef, useState } from 'react'

const ControlledUnContr = () => {

    // const [input, setInput] = useState('');

    const inputRef = useRef(null);

    const handleInput = () => {
        alert(inputRef.current.value);
    }




  return (
    <div>
      <h1>Controlled and Uncontrolled Inputs</h1>
      {/* <h1>Render : {input}</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder='Enter text'/> */}


      <input type="text" ref={inputRef} placeholder='Enter text'/><button onClick={handleInput}>Click</button>
      <p>{}</p>
      
    </div>
  )
}

export default ControlledUnContr
