
import Formsection from "./Sections/Formsection/Formsection";
import Cvcontent from "./Sections/Cvsection/Cvcontent";
import './app.css';
import { useState } from "react";
import Navbar from "./Sections/navbar/Navbar";
function App() {
  const [userinput,setUserinput] = useState(
    {Firstname:"",
    LastName:"",
    Email:"",
    Phone:"",
    Nationality:"",
    Address:"", 
    image:""});

    const [userEducation,setUserEducation] = useState({Schoolname:"",titleofstudy:"",dateofstudyfrom:"",dateofstudyto:"",comments:"" });
    const [UserEmployment,setUserEmployment] = useState({CompanyName:"",workingField:"",Durationfrom:"",Durationto:"",comments:"" });
  
    return (
      <div className="App">
      <Navbar/>
    <div className="Contentarea">
      <Formsection userinput={userinput} setUserinput={setUserinput} UserEmployment={UserEmployment} setUserEmployment={setUserEmployment} userEducation={userEducation} setUserEducation={setUserEducation}/>
      <Cvcontent userinput={userinput}  userEducation={userEducation} UserEmployment={UserEmployment} />
    </div>
    </div>
  );
}

export default App;
