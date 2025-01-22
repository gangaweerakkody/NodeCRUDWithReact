import React, {useEffect} from 'react';
import axios from 'axios';



function Student() {

   useEffect(()=>{
      axios.get('http://localhost:8082/')
      .then(res=>console.log(res))
         .catch(err => console.log(err))
      

   },[])
  return (
    <div class="container">
    <div class="text">
       Node CRUD
    </div>
    
    <form action="#">
       <div class="form-row">
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Full Name</label>
          </div>
          
       </div>
       <div class="form-row">
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Email Address</label>
          </div>
          
       </div>
      
         
          <div class="form-row submit-btn">
             <div class="input-data">
                <div class="inner"></div>
                <input type="submit" value="submit"/>
             </div>
          </div>
          
    </form>
    </div>
  )
}

export default Student
