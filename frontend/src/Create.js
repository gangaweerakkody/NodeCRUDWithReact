import React , {useState} from 'react'
import './create.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Create() {
   const[name,setName]= useState('')
   const[email,setEmail]= useState('')
   const navigate= useNavigate();

function handleSubmit(event){
   event.preventDefault();
   axios.post('http://localhost:8082/create',{name,email})
   .then(res => {
      console.log(res);
      navigate('/');

   })  .catch(err => {console.log(err);})
}
  return (
 <div className="container">
      <h2>Create Student</h2>
    <form action="#"  onSubmit={handleSubmit}>
    
        <div className="name">
            <label htmlFor="name">Student Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" onChange={e => setName(e.target.value)}/>
         </div>
         <div className='email'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control"onChange={e => setEmail(e.target.value)}/>
         </div>
        <button type="submit" className="submit">Submit</button>
    </form>
 </div>
  
  )
}

export default Create
