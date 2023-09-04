import './cvcontent.css';
function Cvcontent({userinput,userEducation,UserEmployment}){
    return( 
       <div className="cvcontainer">

       <div className="contactscatagory">
        
        <div className='profilepiccontainer'>
        <img src= {require('../../Assets/modified.png')}   alt="helloworld"  className='profilepicture'/>
        </div>

       <div className='ContactContainer'>
        <h1>Contact</h1>
          <div>
            <h3>Phone</h3>
            <p>{userinput.Phone}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{userinput.Email}</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>{userinput.Address}</p>
          </div>
        </div>


        <div className='EducationContainer'>
        <h1>Education</h1>
        <div>
          <span>From:{userEducation.dateofstudyfrom}</span> - <span>To:{userEducation.dateofstudyto}</span>
        </div>
        <div>
          <span>{userEducation.titleofstudy}</span>
        </div> 
        <div>
          <span> {userEducation.Schoolname}</span>
        </div>   
        </div>
       </div>

       <div className="expriencecatagory">

       <div className='Userdescription'>
       {userinput.Firstname}
       {UserEmployment.workingField}
       <p>A versatile and results-driven professional with a strong foundation in {UserEmployment.workingField}.
        Leveraging a [number] year track record of excellence,
         I am eager to contribute my expertise and passion for
         {UserEmployment.CompanyName} to drive success in any role. My adaptable approach, problem-solving mindset, 
       and commitment to continuous improvement make me an asset in dynamic and challenging environments. </p>
       </div>
         

       <div className='ExprienceContainer'>
        <h1>Experience</h1>
          <div>
           <span>From:{UserEmployment.Durationfrom}</span> - <span>To:{UserEmployment.Durationto}</span>
          </div>
          <div>
          <span> {UserEmployment.CompanyName}</span>
        </div> 
        <div>
          <span> {UserEmployment.workingField}</span>
        </div>  
        
        <div>
          <p> {UserEmployment.comments}</p>
        </div>  
        </div>


       </div>

      
        
            
       
            </div>
    )
}

export default Cvcontent;


//         {userinput.LastName} 
// {userinput.Email}
// {userinput.Phone} 
// {userinput.Nationality}
// {userinput.Address}


//  {userEducation.Schoolname}<br/>{userEducation.titleofstudy}

// <br/>{userEducation.dateofstudyfrom}<br/>{userEducation.dateofstudyto}<br/>{userEducation.comments}


//  {UserEmployment.CompanyName}<br/>{UserEmployment.workingField}

// <br/>{UserEmployment.Durationfrom}<br/>{UserEmployment.Durationto}<br/>{UserEmployment.comments}