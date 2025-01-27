import React, {useEffect, useState} from 'react';
import axios from 'axios';



function Student() {
const[student,setStudent] = useState([])

   useEffect(()=>{
      axios.get('http://localhost:8082/')
      .then(res=>setStudent(res.data))
         .catch(err => console.log(err))
      

   },[])
  return (
    <div class="container">
    <div class="text">
       Node CRUD
    </div>
    
    <form action="#">
    <table border="1">
          <tbody>
            <tr>
              <th>
                <label htmlFor="fullName">Full Name</label>
              </th>
              
              <th> 
                <label htmlFor="email">Email Address</label>
              </th>
            </tr>

           
         {
            student.map((data,i)=>(
                  <tr key={i}>
                     <td>{data.Name}</td>
                     <td>{data.Email}</td>
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
