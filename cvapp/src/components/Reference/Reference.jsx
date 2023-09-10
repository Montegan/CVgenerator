import React from 'react'

function Reference({Referncelist,setReferncelist,Refernceinput,setRefernceinput}) {

  const addRecomendation=()=>{
        if(Refernceinput.Fullname !== "" && Refernceinput.Phone!== ""){
            setReferncelist([...Referncelist, Refernceinput]);
            setRefernceinput({...Refernceinput,Fullname:"",Company:"",Jobposition:"",Email:"",Phone:""})
        }
    } 
    return (
    <div className='personalinfoWrapper'>
    <h1 className='personaldetail'>Recomendations</h1>
        <div className="userProfilecontainer">
          <div className='inputcontainer'>
          <label htmlFor="firstname">Full Name : </label>
          <input id= "firstname" className=" inputDesgn" type="text"  value= {Refernceinput.Fullname} onChange={(e)=>{setRefernceinput({...Refernceinput, Fullname:e.target.value})}}   />
          </div>

          <div className='inputcontainer'>
          <label htmlFor="lastname">Company</label>
          <input id= "lastname" className=" inputDesgn" type="text" value= {Refernceinput.Company} onChange={(e)=>{setRefernceinput({...Refernceinput, Company:e.target.value})}}  />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="lastname">Job position</label>
          <input id= "lastname" className=" inputDesgn" type="text" value= {Refernceinput.Jobposition} onChange={(e)=>{setRefernceinput({...Refernceinput, Jobposition:e.target.value})}} />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="userEmail">Email</label>
          <input id= "userEmail" className=" inputDesgn" type="email" value= {Refernceinput.Email} onChange={(e)=>{setRefernceinput({...Refernceinput, Email:e.target.value})}}  />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="userPhone">Phone</label>
          <input id= "userPhone" className=" inputDesgn" type="Tel" value= {Refernceinput.Phone} onChange={(e)=>{setRefernceinput({...Refernceinput, Phone:e.target.value})}}  />
          </div>
    </div>
    <button type="button" className= "addempoymentbtn" onClick={addRecomendation}>Add</button>
    </div>
  )
}

export default Reference