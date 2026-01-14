import React, { useState } from 'react'

const MemoeyGame = ({addNewComment}) => {

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
  })

  const handleInputChnage = (event) => {
    const fieldname = event.target.name;
    const newData = event.target.value;

    setFormData((currData) => {
      currData[fieldname] = newData;
      return {...currData};
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    addNewComment(formData)
    setFormData({
      name : "",
      email : "",
      password : "",
    })
  }
  

  return (
    <div>
      <h1>Creating form Here </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name : </label>
        <input type="text" placeholder='Enter you full name' value={formData.name} onChange={handleInputChnage} id='name' name='name' />
          <br /><br />
        <label htmlFor="email">Email : </label>
        <input type="text" placeholder='Enter you Email hear' value={formData.email} onChange={handleInputChnage} id='email' name='email' />
        <br /><br />
        <label htmlFor="password">Password : </label>
        <input type="password" placeholder='Enter you password' value={formData.password} onChange={handleInputChnage} id='password' name='password' /><br /><br />
        <button>Submit Form</button>
      </form>
    </div>
  )
}

export default MemoeyGame
