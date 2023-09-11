import React from 'react'
import "./skills.css";

function Skills({skillsholder,setSkillsholder,skillLanguage,setSkilllanguage}) {
 
 const skilLanguageadd=()=>{
  if(skillLanguage.Skill !== "" || skillLanguage.langauge !== "" ){
    setSkillsholder([...skillsholder, skillLanguage]);
    setSkilllanguage({...skillLanguage, Skill:"", langauge:""}) }
 }
  return (
    
      <div className='skillsconatiner'>
      <h1 className='Skillsheader'>Skills</h1>
      <div className='skillItems'>
      <label htmlFor="skilllabel">Skill : </label>
      <input id= "skillabel"  type="text"  value={skillLanguage.Skill} onChange={(e)=>{setSkilllanguage({...skillLanguage, Skill:e.target.value}) }}   />
      </div>
      
      <h1 className='Skillsheader'>Languages</h1>
      <div className='skillItems'>
      <label htmlFor="languagelabel">language : </label>
      <input id= "languagelabel"  type="text"  value={skillLanguage.langauge} onChange={(e)=>{setSkilllanguage({...skillLanguage, langauge:e.target.value}) }}  />
      </div>
      
      <button type="button" className= "addskillsbtn" onClick={skilLanguageadd}>Add</button>
       </div>
    
  )
}

export default Skills