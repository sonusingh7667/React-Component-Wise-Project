import { useState } from "react"
import React  from 'react'

const StarRatingComp = () => {


    const [rating, setRating] = useState(5);

  return (
    <div>
      <h1>Star Rating Component</h1>

      {[1,2,3,4,5].map((star, index) => (
        <span key={index} onClick={() => setRating(star)}  
        style={{
            cursor: 'pointer',
            fontSize: '50px',
            color: star <= rating ? 'green' : 'gray'
          }}
          >*</span>
      ))}
      <p>Selected Rating : {rating}</p>
    </div>
  )
}

export default StarRatingComp
