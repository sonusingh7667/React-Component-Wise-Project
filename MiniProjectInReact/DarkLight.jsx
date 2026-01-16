import React, { useState } from 'react'

const DarkLight = () => {

    const [mode , setMode] = useState(false);

    const handleToggle = () =>{
        setMode(!mode)
    }

  return (
    <div   style={{
        backgroundColor: mode ? "black" : "white",
        color: mode ? "white" : "black",
        height: "100vh",
        width: "100vw",
        // textAlign: "center",
        // paddingTop: "50px"
      }}>

      <h2>Dark/Light Mode toggle</h2>
      <h2>{mode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={handleToggle}>switch to {mode ? "Dark" : "Light"}</button>
    </div>
  )
}

export default DarkLight
