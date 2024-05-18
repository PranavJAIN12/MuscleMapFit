import React from 'react'
import banner from '../Images/banner.png'
// import banner2 from '../Images/gym.png'
import { Tilt } from 'react-tilt'
import './HeroBanner.css'


export default function HeroBanner() {
  
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <section id='heroBanner'>
      <div className='left-container'>
        <h1>Target Your Workout, Get Results</h1>
        <p style={{marginTop: '2rem', fontSize: '1.4rem', width:'80%'}}>Find the perfect exercises for any muscle group you want to train.
            Search by body part or muscle and get personalized exercise recommendations.<br></br>Check Out the most effective exercises</p>
        <button className='btn'>Explore Exercise</button>
      </div>
      <div className="right-container">
      <Tilt options={defaultOptions} style={{ height: 700, width: 500 }}>
        <img className='banner' src={banner} alt='img'/>
        </Tilt>
      </div>
    </section>
  )
}
