import React from 'react'

export default function Footer() {
  return (
    
    <footer className="footer" style={{ backgroundColor: '#251d10', color: '#eeb76b', bottom: '0', position:'absolute', width:'100%' }}>
    <div className="container py-3">
      <div className="row d-flex justify-content-between">
        <div className="col-md-4">
          <h5>Navigation</h5>
          <ul className="list-unstyled" >
            <li className='desktopMenuListItem' ><a href="/" style={{textDecoration: 'none'}}>Home</a></li>
            <li className='desktopMenuListItem' style={{textDecoration: 'none'}}><a href="/exercises" style={{textDecoration: 'none'}}>Exercises</a></li>
            <li className='desktopMenuListItem' style={{textDecoration: 'none'}}><a href="/about" style={{textDecoration: 'none'}}>About Us</a></li>
          </ul>
        </div>
        <div className="col-md-4 text-center"> {/* Optional: Center social media icons */}
          {/* Add social media icons with links if desired */}
        </div>
        <div className="col-md-4 text-md-right text-center mt-1">  {/* Adjust margin for smaller screens */}
          <small>&copy; {new Date().getFullYear()} MuscleMapFit</small>
        </div>
      </div>
    </div>
  </footer>
    
  )
}
