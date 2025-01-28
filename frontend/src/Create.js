import React from 'react'
import './create.css'
function Create() {
  return (
 <div className="container">
      <h2>Create Student</h2>
    <form action="#" >
    
        <div className="name">
            <label htmlFor="name">Student Name</label>
            <input type="text" placeholder="Enter Name" className="form-control"/>
         </div>
         <div className='email'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control"/>
         </div>
        <button type="submit" className="submit">Submit</button>
    </form>
 </div>
  
  )
}

export default Create
