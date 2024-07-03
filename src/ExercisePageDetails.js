import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOption, youtubeOptions, fetchData } from "./Utils/FetchData";
import './ExercisePageDetail.css';
import gym2 from '../src/components/Images/fitness.png';
import ExerciseVideos from './ExerciseVideos';

export default function ExercisePageDetails() {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const { id } = useParams();
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    const fetchExerciseDetail = async (id) => {
      try {
        const exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          exerciseOption
        );
        const exerciseVideosData = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`, 
          youtubeOptions
        );
        setExerciseDetail(exerciseData);
        setExerciseVideos(exerciseVideosData.contents);
        console.log(exerciseVideosData);
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
      <p className='app-info text-center fs-5 my-3' style={{ width: '80%', margin: 'auto' }}>
        Welcome to the Fitness App! Here you can find detailed information about various exercises to help you stay fit and healthy. Explore exercises by body part, target muscle, and more!
      </p>
      <div className='exercisePageDetailData'>
        <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name} />
        <div className="subdata">
          <h1 className='my-3' style={{ color: '#e2611d' }}>{exerciseDetail.name}</h1>
          <h3 className='my-4'>Body Part: {exerciseDetail.bodyPart}</h3>
          <div>
            <ul className='muscleList'>
              <li className="my-2 fs-4"><img src={gym2} alt='gym' /> {exerciseDetail.target} </li>
              {exerciseDetail.secondaryMuscles.map((muscle, index) => (
                <li key={index} className="my-3 fs-4"><img src={gym2} alt='gym' /> {muscle} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="instructionData">
        <h1 className='text-center' style={{ margin: '2rem 0rem', color: '#e2611d' }}>Exercise Instructions</h1>
        <ol>
          {exerciseDetail.instructions.map((instruction, index) => (
            <li key={index} style={{ fontSize: '1.3rem' }}>{instruction}</li>
          ))}
        </ol>
      </div>
      <div className="exerciseVideo">
        <h1 className='text-center' style={{ margin: '2rem 0rem', color: '#e2611d' }}>Exercise Videos</h1>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      </div>
    </section>
  );
}
