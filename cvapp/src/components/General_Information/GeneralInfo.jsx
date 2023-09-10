import './generalInfo.css';

function GeneralInfo({userinput,setUserinput}){
    return(
      <div className='personalinfoWrapper'>
      <h1 className='personaldetail'>Personal Details</h1>
      <div className="userProfilecontainer">
          <div className='inputcontainer'>
          <label htmlFor="firstname">First Name</label>
          <input id= "firstname" className=" inputDesgn" type="text"  value= {userinput.Firstname} onChange={(e)=>{setUserinput({...userinput, Firstname:e.target.value})}} required  />
          </div>

          <div className='inputcontainer'>
          <label htmlFor="lastname">Last Name</label>
          <input id= "lastname" className=" inputDesgn" type="text" value= {userinput.LastName} onChange={(e)=>{setUserinput({...userinput, LastName:e.target.value})}} required  />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="lastname">Profession</label>
          <input id= "lastname" className=" inputDesgn" type="text" value= {userinput.profession} onChange={(e)=>{setUserinput({...userinput, profession:e.target.value})}} required  />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="userEmail">Email</label>
          <input id= "userEmail" className=" inputDesgn" type="email" value= {userinput.Email} onChange={(e)=>{setUserinput({...userinput, Email:e.target.value})}} required  />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="userPhone">Phone</label>
          <input id= "userPhone" className=" inputDesgn" type="Tel" value= {userinput.Phone} onChange={(e)=>{setUserinput({...userinput, Phone:e.target.value})}} required  />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="userNationality">Nationality</label>
          <input id= "userNationality" type="text" className="userNationality inputDesgn" value= {userinput.Nationality} onChange={(e)=>{setUserinput({...userinput, Nationality:e.target.value})}} required  />
          </div>
          <div className='inputcontainer'>
          <label htmlFor="userAddress" >Adress</label>
          <input id= "userAddress" type="text" className="userAddress inputDesgn"  value= {userinput.Address} onChange={(e)=>{setUserinput({...userinput, Address:e.target.value})}} required />
         </div>
         
        
      </div>
      </div>
    )
}

export default GeneralInfo;