import React, { useState } from 'react'

const LikeDislike = () => {

    const [choice , setChoice] = useState(false);


    const handleChoice = () => {
        setChoice(prev => !prev)
    }



  return (
    <div>
      <h1>Status : {choice ? "Disliked" : "Liked"}</h1>
      <button onClick={handleChoice}>{choice ? "Liked" : "Disliked"}</button>
    </div>
  )
}

export default LikeDislike
