import React from 'react';
import bodypartimg from './components/Images/body-part.png';

export default function BodyPart(props) {
  return (
    <div className="card" style={{ width: '40rem', margin: '10px' }}>
      {/* <img src={bodypartimg} className="card-img-top" alt="..." style={{width:'5rem'}} /> */}
      <div className="card-body text-center">
        <h5 className="card-title" style={{ fontSize: '1.3rem' }}>{props.title}</h5>
        <button className='btn btn-primary' onClick={props.fetchPartExercise}>Show Exercise </button>
      </div>
    </div>
  );
}
