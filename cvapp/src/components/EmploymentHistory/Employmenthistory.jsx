import React from 'react';
import './employment.css';

function Employmenthistory({UserEmployment,setUserEmployment}) {
    
    return (
      <div className='EmploymentWraper'>
      <h1 className='Emplomenthistory'>Employment History</h1>

      <div className='Emplomentitemscontainer'>

      <div className='Emplomentitems'>
      <label htmlFor="educationList">Company Name</label>
      <input className= "EmploymentList"  type="text"  value={UserEmployment.CompanyName} onChange={(e)=>{setUserEmployment({...UserEmployment, CompanyName:e.target.value}) }} required  />
      </div>

      <div className='Emplomentitems'>
      <label htmlFor="titleofstudy">Expertise</label>
      <input id="titleofstudy" className= "EmploymentList"  type="text" value={UserEmployment.workingField} onChange={(e)=>{setUserEmployment({...UserEmployment, workingField:e.target.value}) }}  required  />
      </div>   

      <div className='Emplomentitems'>
      <label htmlFor="emplymentfrom">From</label>
      <input id="emplymentfrom" className= "EmploymentList"  type="date" value={UserEmployment.Durationfrom} onChange={(e)=>{setUserEmployment({...UserEmployment, Durationfrom:e.target.value}) }}   required  />
      </div>

      <div className='Emplomentitems'> 
      <label htmlFor="emplymentto">To</label>
      <input id="emplymentto" className= "EmploymentList"  type="date" value={UserEmployment.Durationto} onChange={(e)=>{setUserEmployment({...UserEmployment, Durationto:e.target.value}) }}   required  />
      </div>

      <div className='Emplomentitems commentitem'>
      <label htmlFor="Ecomments">Extra Information</label>
      <textarea id="Ecomments" className= "EmploymentList texta"  type="text" value={UserEmployment.comments} onChange={(e)=>{setUserEmployment({...UserEmployment, comments:e.target.value}) }} />
      </div>

      </div>
      <button type="button" className= "addempoymentbtn" onClick={()=>{setUserEmployment(UserEmployment) } }>Add</button>
      </div>
    )
  }
  
  export default Employmenthistory;