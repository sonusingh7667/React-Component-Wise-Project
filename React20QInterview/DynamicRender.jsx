import { useState } from "react"
import React  from 'react'

const DynamicRender = () => {

    const list = [
        {id : 1 ,name : "Mr.Singh" , age: 22, cards : "HighLevel1"},
        {id : 2 ,name : "Mr.Singhhh" , age: 222, cards : "HighLevel12"},
        {id : 3 ,name : "Mr.Singhhhhh" , age: 223, cards : "HighLevel13"},
        {id : 4 ,name : "Mr.Singhdddd" , age: 224, cards : "HighLevel14"},
        {id : 5 ,name : "Mr.Singhwwwww" , age: 228, cards : "HighLevel15"}
    ];

    


  return (
    <div>
      <h1>Dynamic List Rendering</h1>
      <ul>
        {list.map((lis, index) => (
            <div key={index}>
            <li>{lis.name}</li>
            <li>{lis.age}</li>
            <li>{lis.cards}</li>
            </div>
            
        ))

        }
      </ul>
    </div>
  )
}

export default DynamicRender
