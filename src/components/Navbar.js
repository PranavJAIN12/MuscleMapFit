import React from 'react'
import {Link} from 'react-router-dom'
// import { Link2 } from 'react-scroll';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className='navbar-head'>MuscleMapFit</h1>
        <div className="desktopMenu">
            <a href='/' className='desktopMenuListItem'>Home</a>
            <a href='#bodyPart-container' className='desktopMenuListItem'>Excercise</a>
            <Link to='/about' className='desktopMenuListItem'>About</Link>

        </div>

        <button className="navbarBtn">Contact Me</button>

    </nav>
  )
}
