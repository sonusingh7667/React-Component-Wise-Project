import React, { useState } from 'react'

const CheckBoxAll = () => {
    
    const options = [
        {id : 1, label : "Apple"},
        {id : 2, label : "Banana"},
        {id : 3, label : "Mango"},
        {id : 4, label : "Organge"},
        {id : 5, label : "asdfghjk"}
    ];

    const [selected, setSelected] = useState([]);




  return (
    <div>
      <h2>Check Box Select All functionality...</h2>
    </div>
  )
}

export default CheckBoxAll
