import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
       <a href='/' style={{textDecoration:'none'}}> <h1 className='navbar-head'>MuscleMapFit</h1></a>
        <div className="desktopMenu">
            <a href='/' className='desktopMenuListItem'>Home</a>
            <a href='#bodyPart-container' className='desktopMenuListItem'>Excercise</a>
            <Link to='/about' className='desktopMenuListItem'>About</Link>
            {/* <button className='btn btn-primary'>Dark</button> */}

        </div>

        <button className="navbarBtn">Contact Me</button>

    </nav>
  )
}
