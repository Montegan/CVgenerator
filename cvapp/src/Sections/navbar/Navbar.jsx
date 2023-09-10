import React from 'react'
import './navbar.css'
function Navbar({handlePrint}) {
  return (
    <div className='Navbarcontainer'>
    <div>
     <h1 className='logo'>Rezimate</h1>
     </div>

     <div>
        <button className='generateBtn'>Generate sample</button>
        <button onClick={handlePrint} className='generateBtn'>Print Resume</button>

     </div>
    </div>
  )
}

export default Navbar