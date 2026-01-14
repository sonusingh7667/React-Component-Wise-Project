import React, { useState } from 'react'
import MemoeyGame from './MemoeyGame'

const FormSubmit = () => {

    const [comments, setComments] = useState([{
        name: "SOnu",
        email: "singh@gmail.com",
        password : "1234",
    }])

    const addNewComment = (comment) => {
        setComments((currComments) => {
            return [...currComments, comment]
        })
    }

  return (
    <div>
      <MemoeyGame addNewComment = {addNewComment}/>

      <h2>Form is Submitted hear</h2>
      {comments.map((comment, idx) => {
       return <div className='comment' key={idx}>
            <span>Name :  {comment.name}</span>
            <br />
            <span>Email : {comment.email}</span>
            <br />
            <span>Password : {comment.password}</span>
        </div>
      })}
    </div>
  )
}

export default FormSubmit
