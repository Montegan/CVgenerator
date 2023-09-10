
import React from "react";
import './education.css';
function Education({educationcontainer,seteducationcontainer,userEducation,setUserEducation}) {
    
   const addEdu=()=>{
    if(userEducation.Schoolname !== "" && userEducation.titleofstudy !== ""){
  seteducationcontainer([...educationcontainer,userEducation]); 
  setUserEducation({...userEducation, Schoolname:"" , titleofstudy:"",dateofstudyfrom:"",dateofstudyto:"",comments:""}) 
    }
   }

  return (
    <div className="educationwrapper">
    <h1 className="Education">Education</h1>

    <div className="userEducationcontainer" >

    <div className='Educationitem'>
    <label htmlFor="educationList">School Name</label>
    <input className= "educationList"  type="text"  value={userEducation.Schoolname} onChange={(e)=>{setUserEducation({...userEducation, Schoolname:e.target.value}) }}   />
    </div>

    <div className='Educationitem'>
    <label htmlFor="titleofstudy">Title of study</label>
     <input id="titleofstudy" className= "educationList"  type="text" value={userEducation.titleofstudy} onChange={(e)=>{setUserEducation({...userEducation, titleofstudy:e.target.value}) }}    />
     </div>

     <div className='Educationitem'>   
    <label htmlFor="dateofstudyfrom">From</label>
    <input id="dateofstudyfrom" className= "educationList"  type="date" value={userEducation.dateofstudyfrom} onChange={(e)=>{setUserEducation({...userEducation, dateofstudyfrom:e.target.value}) }}    />
    </div> 

    <div className='Educationitem'>
    <label htmlFor="dateofstudyto">To</label>
    <input id="dateofstudyto" className= "educationList"  type="date" value={userEducation.dateofstudyto} onChange={(e)=>{setUserEducation({...userEducation, dateofstudyto:e.target.value}) }} />
    </div>

    <div className='Educationitem eduCommentItem'>
    <label htmlFor="comments">Extra information</label>
    <textarea id="comments" className= "educationList"  type="text" value={userEducation.comments} onChange={(e)=>{setUserEducation({...userEducation, comments:e.target.value}) }} />
    </div>
    </div>

    <button type="button" className="addeducationbtn" onClick={addEdu}>Add</button>
    </div>
  )
}

export default Education