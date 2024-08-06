import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar flex justify-end gap-9 text-[white] '>
      <ul className='navMenu flex justify-evenly items-center gap-9'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/aboutme"><li>About Me</li></Link>
        <Link to='/services'><li>Services</li></Link>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      <Link to="/connectwithme"><div className="navConnect p-[8px] text-[22px] pointer rounded-[50px] bg-[#DA7C25] ">Connect With Me</div></Link>
    </div>
  )
}

export default Navbar
