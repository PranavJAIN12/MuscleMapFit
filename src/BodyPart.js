import React from 'react';
import bodypartimg from './components/Images/body-part.png';

export default function BodyPart({title, fetchPartExercise}) {
  return (
    <div className="card"style={{
      flexBasis: "33%%",
      alignItems: "center",
      textAlign: "center",
      height: "15rem",
      padding: "20px 0px",
      
      margin: "10px",
      maxWidth: '15rem'
      
    }}>
      <img src={bodypartimg} className="card-img-top" alt="..." style={{width:'5rem'}} />
      <div className="card-body text-center">
        <h5 className="card-title" style={{ fontSize: '1.3rem' }}>{title}</h5>
        <button className='btn btn-primary' onClick={() => fetchPartExercise(title)}>Show Exercise </button>
      </div>
    </div>
  );
}
