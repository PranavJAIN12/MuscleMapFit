import React, { useState, useEffect } from "react";
import "./App.css";
import HeroBanner from "./components/Hero Banner/HeroBanner";
import { exerciseOption, fetchData } from "./Utils/FetchData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import Footer from "./Footer";
import ExercisePageDetails from "./ExercisePageDetails";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [search, setSearch] = useState("");
  const [bodyPart, setBodyPart] = useState([]);
  const [bodyPartExercises, setBodyPartExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  let [color] = useState("#ffc107");
  const[limit, setLimit] = useState(14);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    setLoading(true);
    try {
      const searchedExercise = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${search}?limit=14`,
        exerciseOption
      );
      setBodyPartExercises(searchedExercise);
      console.log(searchedExercise);
      setSearch("");
      setLoading(false);
    } catch (error) {
      console.log("error fetching searched body part exercise", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBodyParts = async () => {
      setLoading(true);
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOption
        );
        setBodyPart(bodyPartsData);
        console.log("Body Parts:", bodyPartsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching body parts:", error);
      }
    };

    fetchBodyParts();
  }, []);

  const fetchPartExercise = async (bodyPart) => {
    console.log("button pressed");
    setLoading(true);
    try {
      const bodyPartExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=${limit}`,
        exerciseOption
      );
      console.log(bodyPartExercisesData);
      setBodyPartExercises(bodyPartExercisesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching body parts:", error);
    }
  };

  const handleNextPage=async(bodyPart)=>{
    console.log("button pressed");
    // setLimit(limit+14)
    try {
      const bodyPartExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=28`,
        exerciseOption
      );
      console.log(bodyPartExercisesData);
      setBodyPartExercises(bodyPartExercisesData);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching body parts:", error);
    }
  }
  const handlePrevPage=()=>{

  }
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <SearchBar
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  search={search}
                />
                <div>
                  <h1
                    className="text-center"
                    style={{ marginTop: "6rem", color: "#E2703A" }}
                  >
                    Different Body Parts
                  </h1>
                  <p className="text-center">
                    Different body parts are available, select any body part and
                    all exercise related to same will be displayed
                  </p>

                  <div
                    className="bodyPart-container"
                    id="bodyPart-container"
                    style={{ marginTop: "3rem" }}
                  >
                    {bodyPart.map((part) => (
                      <BodyPart
                        key={part} // Add key prop
                        title={part}
                        fetchPartExercise={fetchPartExercise}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h1
                    className="text-center"
                    style={{ marginTop: "6rem", color: "#E2703A" }}
                  >
                    Showing Results
                  </h1>
                  <p className="text-center">
                    Here it will render all the exercise of selected body part
                    or muscle
                  </p>
                  <ScaleLoader
                    className="mx-auto"
                    color={color}
                    loading={loading}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    style={{ position: "absolute", left: "50%" }}
                  />
                  <div
                    className="exercise-container"
                    style={{ marginTop: "3rem" }}
                  >
                    {bodyPartExercises.map((exercise) => (
                      <ExerciseCard
                        key={exercise.id} // Add key prop
                        id={exercise.id} // Pass id as prop
                        gif={exercise.gifUrl}
                        title={exercise.name}
                        target={exercise.target}
                        secondary1={exercise.secondaryMuscles[0]}
                        secondary2={exercise.secondaryMuscles[1]}
                      />
                    ))}
                  </div>
                  <div className="pageController">
                    <button className="btn" onClick={handlePrevPage}>Prev</button>
                    <button className="btn" onClick={handleNextPage}>Next</button>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/exercises/:id" element={<ExercisePageDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
