

function Student() {
  return (
    <div className="container">
        <div className="body">
           <form method="" >
            <div className="form-row">
                <div className="input-data">
                <input type="text" required/>
                        <div classname="underline"> </div>
                         <label for="">Name</label>
                     </div>
                     <div className="input-data">
                     <input type="email"  required/>
                        <div classname="underline">

                        </div>
                        <label for="">Email</label>
                     </div>
                 </div>
                    <div className="submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" value="submit"/>
                        </div>
                    </div>
    
            
           </form>
        </div>
        
    </div>
  )
}

export default Student
