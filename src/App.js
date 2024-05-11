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
      setSearch(searchedExercise)
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
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

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
        <h2 className="text-center">Body Parts</h2>
        

        <div className="bodyPart-container">
          {bodyPart.map((part) => (
            <BodyPart title={part} fetchPartExercise={fetchPartExercise} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-center my-3">Showing Results</h2>
        <div className="exercise-container">
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
