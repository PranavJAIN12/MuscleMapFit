import React from 'react'
import banner from '../Images/banner.png'
import './HeroBanner.css'

export default function HeroBanner() {
  return (
    <section id='heroBanner'>
      <div className='left-container'>
        <h1>Transform Your Body into a machine</h1>
        <p>Check Out the most effective exercises</p>
        <button className='btn'>Explore Exercise</button>
      </div>
      <div className="right-container">
        <img className='banner' src={banner} alt='img'/>
      </div>
    </section>
  )
}
