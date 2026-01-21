import React, { useState } from 'react'

const ConditionalRender = () => {

    
    const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Question</h1>

      <h2>{isLogged ? "Welcome to this application" : "Please Login"}</h2>

      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Logout</button>
      ) : (<button onClick={() => setIsLogged(true)}>LogIn</button>)}
    </div>
  )
}

export default ConditionalRender
