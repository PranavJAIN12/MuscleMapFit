import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { exerciseOption, fetchData } from "./Utils/FetchData";

export default function ExercisePageDetails() {
  const[exerciseDetail, setExerciseDetail] = useState(null)
  const {id} =useParams()

  useEffect(()=>{
    const fetchPartExercise = async (bodyPart) => {
     
      
      try {
        const bodyPartExercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=14`,
          exerciseOption
        );
        console.log(bodyPartExercisesData);
        setExerciseDetail(bodyPartExercisesData);
       
      } catch (error) {
        console.error("Error fetching body parts:", error);
      }
    };
  }, [id])
  console.log("hello");

  return (
    <div>
      <h1>hello world</h1>
      <p>{exerciseDetail.bodyPart}</p>
      <p>{exerciseDetail.equipment}</p>
    </div>
  )
}
