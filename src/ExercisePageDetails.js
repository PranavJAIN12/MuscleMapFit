import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { exerciseOption, fetchData } from "./Utils/FetchData";
import './ExercisePageDetail.css'
import gym2 from '../src/components/Images/fitness.png'


export default function ExercisePageDetails() {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async (id) => {
      try {
        const exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          exerciseOption
        );
        setExerciseDetail(exerciseData);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }
    };

    fetchExerciseDetail(id);
  }, [id]);

  if (!exerciseDetail) {
    return <div>Loading...</div>;
  }

  return (
   
    <section id='exercisePageDetail'>
     <p className='app-info'>
        Welcome to the Fitness App! Here you can find detailed information about various exercises to help you stay fit and healthy. Explore exercises by body part, target muscle, and more!
      </p>
      <div className='exercisePageDetailData'>
        <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name}/>
        <div className="subdata">

        <h1 className='my-3' style={{color:'#e2611d'}}>  {exerciseDetail.name }</h1>
        <h3 className='my-4'>Body Part: {exerciseDetail.bodyPart}</h3>
        {/* <h4>Target Muscle: {exerciseDetail.target}</h4>
        <h4>Secondary Muscles: {exerciseDetail.secondaryMuscles[0]}, {exerciseDetail.secondaryMuscles[1]}, {exerciseDetail.secondaryMuscles[2]}</h4> */}
        <div>
        <ul className='muscleList'>
          <l1 className="my-2 fs-4"><img src={gym2} alt='gym'/>   {exerciseDetail.target } </l1>
          <l1 className="my-3 fs-4"><img src={gym2} alt='gym'/> {exerciseDetail.secondaryMuscles[0] } </l1>
          <l1 className="my-3 fs-4"><img src={gym2} alt='gym'/> {exerciseDetail.secondaryMuscles[1] } </l1>

        </ul>
        </div>
       
        
        </div>

      </div>
      <div className="instructionData">

      <h1 className='text-center' style={{margin:'2rem 0rem', color:'#e2611d'}}>Exercise Instructions</h1>
      <ol>
        {exerciseDetail.instructions.map((instruction, index) => (
          <li key={index} style={{fontSize: '1.3rem'}}>{instruction}</li>
        ))}
      </ol>
      </div>

    </section>
  )
}
