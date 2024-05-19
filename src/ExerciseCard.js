import React from "react";
import { Link } from "react-router-dom";

export default function ExerciseCard(props) {

  return (
    
    <div
      className="card"
      style={{
        flexBasis: "29%",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        height: "25rem",
        padding: "20px 0px",
        width: "43rem",
        margin: "10px",
        backgroundColor: '#251d10',
        color: 'white'
      }}
    >
      <img
        src={props.gif}
        className="card-img-top"
        alt="..."
        style={{ width: "10rem" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title" style={{ fontSize: "1.5rem", textDecorationStyle: 'solid' }}>
          {props.title}
        </h5>
        <div className="badges" style={{ display: "flex", margin: "1rem" }}>
          <span class="badge text-bg-danger mx-3 fs-6">{props.target}</span>
          <span class="badge text-bg-warning mx-2 fs-6">{props.secondary1}</span>
          <span class="badge text-bg-warning fs-6">{props.secondary2}</span>
        </div>
        {/* <button className="btn btn-primary">
          Show Details
        </button> */}
        <Link to={`/exercises/${props.exercises}`} className='mx-4 btn btn-danger'>View More</Link> {/* Link to RecipeDetail page */}
      </div>
    </div>
  );
}
