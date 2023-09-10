import GeneralInfo from "../../components/General_Information/GeneralInfo";
import Education from "../../components/Education/Education";
import './formsection.css';
import Employmenthistory from "../../components/EmploymentHistory/Employmenthistory";
import Skills from "../../components/Skills/Skills";
import Reference from "../../components/Reference/Reference";
function Formsection({handlePrint,Referncelist,setReferncelist,Refernceinput,setRefernceinput,skillsholder,setSkillsholder,skillLanguage,setSkilllanguage,workcontainer,setworkcontainer, educationcontainer,seteducationcontainer,userinput,setUserinput,userEducation,setUserEducation,UserEmployment,setUserEmployment}){
    
    const submithandle=(e)=>{
         e.preventDefault();
         handlePrint();
    }
    return(
    <div className="formsectionContainer">
     <form onSubmit={submithandle} className="formContainer">
     <GeneralInfo userinput={userinput} setUserinput={setUserinput}/>
     <Education educationcontainer={educationcontainer} seteducationcontainer={seteducationcontainer} userEducation={userEducation} setUserEducation={setUserEducation}/>
     <Employmenthistory workcontainer={workcontainer} setworkcontainer={setworkcontainer} UserEmployment={UserEmployment} setUserEmployment={setUserEmployment}/>
     <Skills skillLanguage={skillLanguage} setSkilllanguage={setSkilllanguage} skillsholder={skillsholder} setSkillsholder={setSkillsholder} />
     <Reference Referncelist={Referncelist} setReferncelist={setReferncelist} Refernceinput={Refernceinput} setRefernceinput={setRefernceinput}/>
     <button className ="formSubmitbtn"  type='submit'>Print Resume</button>
     </form>
    </div>
)
}

export default Formsection;