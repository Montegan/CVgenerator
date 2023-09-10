
import Formsection from "./Sections/Formsection/Formsection";
import Cvcontent from "./Sections/Cvsection/Cvcontent";
import './app.css';
import { useState,useRef } from "react";
import Navbar from "./Sections/navbar/Navbar";
import {useReactToPrint} from "react-to-print";
function App() {
  const [userinput,setUserinput] = useState(
    {Firstname:"",
    LastName:"",
    Email:"",
    Phone:"",
    Nationality:"",
    profession:"",
    Address:"", 
    image:""});
    
    const selecteditem =useRef();
    const handlePrint= useReactToPrint({content:()=>selecteditem.current,});
    const [userEducation,setUserEducation] = useState({Schoolname:"",titleofstudy:"",dateofstudyfrom:"",dateofstudyto:"",comments:"" });
    const [UserEmployment,setUserEmployment] = useState({CompanyName:"",workingField:"",Durationfrom:"",Durationto:"",comments:"" });
    const [skillLanguage,setSkilllanguage] = useState({ Skill:"" , langauge:""});
    const [Refernceinput,setRefernceinput]= useState( {Fullname:"",Company:"",Jobposition:"",Email:"", Phone:""})
    
    const [Referncelist,setReferncelist] = useState([]);
    const [skillsholder,setSkillsholder] = useState([]);
    const [educationcontainer,seteducationcontainer] = useState([]);
    const [workcontainer,setworkcontainer] = useState([]);
   
    return (
      <div className="App">
      <Navbar userinput={userinput} handlePrint={handlePrint}/>
    <div className="Contentarea">
      <Formsection handlePrint={handlePrint} skillsholder={skillsholder} setSkillsholder={setSkillsholder} 
      Refernceinput={Refernceinput} setRefernceinput={setRefernceinput}
      Referncelist={Referncelist} setReferncelist={setReferncelist}
      skillLanguage={skillLanguage} setSkilllanguage={setSkilllanguage}
       workcontainer={workcontainer} setworkcontainer={setworkcontainer} 
       userinput={userinput} educationcontainer={educationcontainer}
        seteducationcontainer={seteducationcontainer} setUserinput={setUserinput}
         UserEmployment={UserEmployment} setUserEmployment={setUserEmployment} 
         userEducation={userEducation} setUserEducation={setUserEducation}/>
      <Cvcontent ref={selecteditem} Referncelist={Referncelist} skillsholder={skillsholder}
       skillLanguage={skillLanguage} userinput={userinput} 
      workcontainer={workcontainer} educationcontainer={educationcontainer} 
      userEducation={userEducation} UserEmployment={UserEmployment} />
     
    </div>
   
    </div>
  );
}

export default App;
