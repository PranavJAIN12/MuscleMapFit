import React from 'react';
// import bodypartimg from './components/Images/body-part.png';
import gymimg from './components/Images/gymicon.png'

export default function BodyPart({title, fetchPartExercise}) {
  return (
    <div className="card" style={{
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      width: 'auto',
      flexBasis: '17%',
      margin: '10px',
      padding: '10px',
      backgroundColor: '#251d10',
      color: 'white'
      
    }}>
      <img src={gymimg} className="card-img-top" alt="..." style={{width:'5rem'}} />
      <div className="card-body text-center">
        <h5 className="card-title" style={{ fontSize: '1.3rem' }}>{title}</h5>
        <button className='btn btn-primary w-100' onClick={() => fetchPartExercise(title)}>Show Exercise </button>
      </div>
    </div>
  );
}
