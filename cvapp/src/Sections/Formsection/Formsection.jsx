import GeneralInfo from "../../components/General_Information/GeneralInfo";
import Education from "../../components/Education/Education";
import './formsection.css';
import Employmenthistory from "../../components/EmploymentHistory/Employmenthistory";
function Formsection({userinput,setUserinput,userEducation,setUserEducation,UserEmployment,setUserEmployment}){
return(
    <div className="formsectionContainer">
     <form action="" className="formContainer">
     <GeneralInfo userinput={userinput} setUserinput={setUserinput}/>
     <Education userEducation={userEducation} setUserEducation={setUserEducation}/>
     <Employmenthistory UserEmployment={UserEmployment} setUserEmployment={setUserEmployment}/>
     <button className ="formSubmitbtn" type='submit'>submit</button>
     </form>
    </div>
)
}

export default Formsection;