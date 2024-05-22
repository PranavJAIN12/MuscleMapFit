import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { exerciseOption, fetchData } from "./Utils/FetchData";

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
    <div>
      <h1>{exerciseDetail.name}</h1>
      <p>Body Part: {exerciseDetail.bodyPart}</p>
      <p>Equipment: {exerciseDetail.equipment}</p>
      <p>Target: {exerciseDetail.target}</p>
      <p>GIF URL: <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name} /></p>
    </div>
  )
}
