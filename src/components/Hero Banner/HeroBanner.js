import React from 'react'
import banner from '../Images/banner.png'
// import banner2 from '../Images/gym.png'
import './HeroBanner.css'

export default function HeroBanner() {
  return (
    <section id='heroBanner'>
      <div className='left-container'>
        <h1>Target Your Workout, Get Results</h1>
        <p style={{marginTop: '2rem', fontSize: '1.4rem', width:'80%'}}>Find the perfect exercises for any muscle group you want to train.
            Search by body part or muscle and get personalized exercise recommendations.<br></br>Check Out the most effective exercises</p>
        <button className='btn'>Explore Exercise</button>
      </div>
      <div className="right-container">
        <img className='banner' src={banner} alt='img'/>
      </div>
    </section>
  )
}
