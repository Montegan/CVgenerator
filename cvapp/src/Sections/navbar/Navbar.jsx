import React from 'react'
import './navbar.css'
function Navbar({handlePrint,userinput}) {
  return (
    <div className='Navbarcontainer'>
    <div>
     <h1 className='logo'>Rezimate</h1>
     </div>

     <div>
        <button onClick={userinput.Firstname !== "" && userinput.LastName !== "" ? handlePrint : null} className='generateBtn'>Print Resume</button>

     </div>
    </div>
  )
}

export default Navbar