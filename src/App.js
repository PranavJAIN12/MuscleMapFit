import { useState, useEffect } from "react";
import "./App.css";
import HeroBanner from "./components/Hero Banner/HeroBanner";
import { exerciseOption, fetchData } from "./Utils/FetchData";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

function App() {
  const [search, setSearch] = useState("");
  const [bodyPart, setBodyPart] = useState([]);
  const [bodyPartExercises, setBodyPartExercises] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    try {
      const searchedExercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${search}`, exerciseOption);
      setBodyPartExercises(searchedExercise)
      console.log(searchedExercise)
      setSearch('')
    } catch (error){
      console.log("error fetching searched body part exercise", error);
    }
  };

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOption
        );
        setBodyPart(bodyPartsData);
        console.log("Body Parts:", bodyPartsData);
      } catch (error) {
        console.error("Error fetching body parts:", error);
      }
    };

    fetchBodyParts();
  }, []); 

  const fetchPartExercise = async (bodyPart) => {
    console.log("button pressed");
    try {
      const bodyPartExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOption
      );
      console.log(bodyPartExercisesData);
      setBodyPartExercises(bodyPartExercisesData);
    } catch (error) {
      console.error("Error fetching body parts:", error);
    }
  };

  return (
    <>
      <Navbar />
      <HeroBanner />
      <SearchBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={search}
      />
      <div>
        <h1 className="text-center" style={{marginTop: '6rem', color: '#E2703A'}}>Different Body Parts</h1>
        <p className="text-center">Different body parts are available, select any body part and all exercise related to same will be displayed</p>
        

        <div className="bodyPart-container" style={{marginTop: '3rem'}}>
          {bodyPart.map((part) => (
            <BodyPart title={part} fetchPartExercise={fetchPartExercise} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-center" style={{marginTop: '6rem', color: '#E2703A'}}>Showing Results</h2>
        <div className="exercise-container" style={{marginTop: '3rem'}}>
          {bodyPartExercises.map((exercises) => (
            <ExerciseCard
              gif={exercises.gifUrl}
              title={exercises.name}
              target={exercises.target}
              secondary1={exercises.secondaryMuscles[0]}
              secondary2={exercises.secondaryMuscles[1]}
            />
          ))}
        </div>
        
      </div>
    </>
  );
}

export default App;
