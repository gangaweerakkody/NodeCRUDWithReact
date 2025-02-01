import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './student.css'
import { Link } from 'react-router-dom';

function Student() {
const[student,setStudent] = useState([])

   useEffect(()=>{
      axios.get('http://localhost:8082')
      .then(res=>setStudent(res.data))
         .catch(err => console.log(err))
      

   },[])
  return (
    <div className="container">
    <div className="text">
       Node CRUD
    </div>
    <Link to="/create" className="Add">Add +</Link>
    
    <form action="#" >
    <table border="1">
          <tbody>
            <tr>
              <td>
                <label htmlFor="fullName">Full Name</label>
              </td>
              
              <td> 
                <label htmlFor="email">Email Address</label>
              </td>

              <td>
                <label htmlFor="action">Action</label>
              </td>


            </tr>

           
         {
            student.map((data,i)=>(
                  <tr key={i}>
                     <td>{data.Name}</td>
                     <td>{data.Email}</td>
                     <td>  <button className='update'>Update</button>
                     <button className='delete'>Delete</button></td>
                   
                  </tr>
            ))

            
         }
           
          </tbody>
        </table>
          
    </form>
    </div>
  )
}

export default Student
