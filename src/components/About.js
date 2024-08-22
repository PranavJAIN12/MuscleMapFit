import React from 'react'
import git from './Images/icons8-github-50.png'
import linkedin from './Images/icons8-linkedin-48.png'
export default function About() {
  return (
    <section id="about" className="about-section">
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Welcome to Your Personalized Workout Journey</h2>
          <p>
            This app is designed to help you achieve your fitness goals by providing a targeted and convenient workout experience. Here's what sets us apart:
          </p>
          <ul>
            <li>
              <b>Find Exercises by Body Part and Muscle Group:</b> No more
              wasting time searching for exercises. Search by body part or
              muscle group and get a personalized list of exercises tailored
              to your specific needs.
            </li>
            <li>
              <b>Detailed Exercise Information:</b> Each exercise comes with
              a clear description, animation, and information on targeted
              muscle groups, equipment needed (if any), and difficulty level.
            </li>
            {/* Add more features here if applicable */}
          </ul>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="path/to/about-image.jpg" // Replace with your image path
            alt="About Us Image"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <h2>Connect With Us</h2>
          <p>
            Stay up-to-date with the latest fitness trends and learn more about
            the app by following us on social media or visiting our developer
            profiles.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <a
              href="https://www.linkedin.com/in/pranav-jain-32179722a/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noreferrer"
              className="social-link mx-3"
            >
              <img src={git} alt='git' className="fab fa-linkedin"></img>
            </a>
            <a
              href="https://github.com/PranavJAIN12" // Replace with your GitHub URL
              target="_blank"
              rel="noreferrer"
              className="social-link mx-3"
            >
              <img src={linkedin} alt='linkedin' className="fab fa-github"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
