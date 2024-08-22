/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import git from ".//components/Images/icons8-github-50.png";
import linked from ".//components/Images/icons8-linkedin-48.png";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#251d10", color: "#eeb76b" }}
    >
      <div className="container py-3">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li className="desktopMenuListItem">
                <a href="/" style={{ textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li
                className="desktopMenuListItem"
                style={{ textDecoration: "none" }}
              >
                <a href="/exercises" style={{ textDecoration: "none" }}>
                  Exercises
                </a>
              </li>
              <li
                className="desktopMenuListItem"
                style={{ textDecoration: "none" }}
              >
                <a href="/about" style={{ textDecoration: "none" }}>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            {" "}
            {/* Optional: Center social media icons */}
            {/* Add social media icons with links if desired */}
          </div>
          <div className="col-md-4 text-md-right text-center mt-1">
            {" "}
            {/* Adjust margin for smaller screens */}
            <small>&copy; {new Date().getFullYear()} MuscleMapFit</small>
          </div>
          <h5 className="text-center">
            Made in ❤️ by Pranav Jain <br />{" "}
            <a
              href="https://www.linkedin.com/in/pranav-jain-32179722a/"
              target="_blank"
            >
              {" "}
              <img src={linked} alt="img" />{" "}
            </a>{" "}
            <a href="https://github.com/PranavJAIN12">
              {" "}
              <img className="mx-3 my-3" src={git} alt="img" />{" "}
            </a>{" "}
          </h5>
        </div>
      </div>
    </footer>
  );
}
