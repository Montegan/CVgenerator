import './cvcontent.css';
import { forwardRef } from 'react';
function Cvcontent({Referncelist,skillsholder,skillLanguage,userinput,workcontainer,userEducation,UserEmployment,educationcontainer},ref){

  const educations= educationcontainer.map((items)=>{ 
    return(
      <ul>
    <li className='EducationDetailswraper'>    
    <span> {items.dateofstudyfrom}</span> / <span> {items.dateofstudyto}</span>
    <p className='educationdetails' style={{fontSize:"16px"}}> <strong> {items.titleofstudy} </strong></p>
    <p className='educationdetails'> {items.Schoolname}</p>
    <p className='educationdetails'> {items.comments}</p>
  </li> 
  </ul>
  )
  })

  const work= workcontainer.map((items)=>{ return(
    <ul>
    <li key={items.CompanyName + items.workingField} className="exprincewrapper">
          <div>
           <span>From:{items.Durationfrom}</span> - <span>To:{items.Durationto}</span>
          </div>
          <div>
          <span> {items.CompanyName}</span>
        </div> 
        <div>
          <span> {items.workingField}</span>
        </div>  
        
        <div>
          <p> {items.comments}</p>
        </div>  
        </li>
        </ul>
     )
  })

  const skills = skillsholder.map((content)=>{
    return(
    <div key={content.Skill + content.langauge} className="exprincewrapper">
          {content.Skill !== "" ?  <ul>
          <li> {content.Skill}</li>
          </ul>: null} 
        </div>)
  })

  const Language = skillsholder.map((content)=>{
    return(
    <div key={content.Skill + content.langauge} className="exprincewrapper">
         {content.langauge !=="" ?
        <ul>
          <li> {content.langauge}</li>
          </ul>: null  }
        </div>)
  })

  const Recomendtaions = Referncelist.map((references)=>{
    return(
      <div className='recomendationWraper'>
      <div className='recomendationDetails'>
          <p>{references.Fullname}</p>
        </div>
      <div className='recomendationDetails'>
          <p>{references.Company}</p>
        </div>
        <div className='recomendationDetails'>
          <p>{references.Jobposition}</p>
        </div>
        <div className='recomendationDetails'>
          <p>{references.Email}</p>
        </div>
        <div className='recomendationDetails'>
          <p>{references.Phone}</p>
        </div>
      </div>)
  })
  
    return( 
       <div ref={ref} className="cvcontainerScroll">
       <div className="cvcontainer">
       <div className="contactscatagory">
        
        <div className='profilepiccontainer'>
        <img src= {require('../../Assets/modified.png')}   alt="helloworld"  className='profilepicture'/>
        </div>

       <div className='ContactContainer'>
        <h1>Contact Info</h1>
        <hr/>
          <div className='contactDetails'>
            <h3>Phone : </h3>
            <p>{userinput.Phone}</p>
          </div>
          <div className='contactDetails'>
            <h3>Email : </h3>
            <p>{userinput.Email}</p>
          </div>
          <div className='contactDetails'>
            <h3>Address : </h3>
            <p>{userinput.Address}</p>
          </div>
        </div>


        <div className='EducationContainer'>
        <h1>Education</h1>
        <hr/>
          {educations}
        </div>
        
        <div className="SkillContainer">
        <h1>Skills</h1>
        <hr/>
          {skills}
        </div>
         
         <div className="languageContainer">
         <h1>Languages</h1>
         <hr/>
         {Language}
         </div>

       </div>

       <div className="expriencecatagory">

       <section className='Userdescription'>
       <h1 className='FirstLastnameHeader'> {userinput.Firstname}  {userinput.LastName}</h1>
       <h2 className='professionHeader'> {userinput.profession}</h2>
       {userinput.profession && <p className="userDescription">A versatile and results-driven professional with a strong foundation in {userinput.profession} .
        Leveraging several years track record of excellence,
         I am eager to contribute my expertise and passion to drive success in any role. My adaptable approach, problem-solving mindset, 
       and commitment to continuous improvement make me an asset in dynamic and challenging environments. </p>
       }
       </section>
         

       <div className='ExprienceContainer'>
        <h1>Experience</h1>
        <hr/>
        {work}
       </div>

       <div className="recomendationContainer">
        <h1>Recomendations</h1>
        <hr/>
        <div className='recomendationTiles'>
        {Recomendtaions}
        </div>
       </div>

       </div>

      
        
            
       </div>
            </div>
    )
}

const ForwardedCv= forwardRef(Cvcontent);
export default ForwardedCv;


//         {userinput.LastName} 
// {userinput.Email}
// {userinput.Phone} 
// {userinput.Nationality}
// {userinput.Address}


//  {userEducation.Schoolname}<br/>{userEducation.titleofstudy}

// <br/>{userEducation.dateofstudyfrom}<br/>{userEducation.dateofstudyto}<br/>{userEducation.comments}


//  {UserEmployment.CompanyName}<br/>{UserEmployment.workingField}

// <br/>{UserEmployment.Durationfrom}<br/>{UserEmployment.Durationto}<br/>{UserEmployment.comments}