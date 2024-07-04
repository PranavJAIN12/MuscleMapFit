/* eslint-disable eqeqeq */
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
  const [selectedBodyPart, setSelectedBodyPart] = useState(""); // New state
  const [bodyPartExercises, setBodyPartExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  let [color] = useState("#ffc107");
  const [limit, setLimit] = useState(14);

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
    setSelectedBodyPart(bodyPart); // Set the selected body part
    setLoading(true);
    try {
      const bodyPartExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=14`,
        exerciseOption
      );
      console.log(bodyPartExercisesData);
      setBodyPartExercises(bodyPartExercisesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching body parts:", error);
      setLoading(false);
    }
  };

  const handleNextPage = async () => {
    if (!selectedBodyPart) {
      console.error("No body part selected");
      return;
    }

    console.log("Fetching next page exercises for body part:", selectedBodyPart);
    setLimit((prevLimit) => prevLimit + 14); // Increment limit by 14
    setLoading(true);
    try {
      const bodyPartExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=${limit}`,
        exerciseOption
      );
      console.log(bodyPartExercisesData);
      setBodyPartExercises(bodyPartExercisesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching body parts:", error);
      setLoading(false);
    }
  };

  const handlePrevPage = async () => {
    if (!selectedBodyPart) {
      console.error("No body part selected");
      return;
    }
  
    if (limit <= 14) {
      console.log("Already at the first page of exercises");
      return;
    }
  
    console.log("Fetching previous page exercises for body part:", selectedBodyPart);
    const newLimit = limit - 14;
    setLoading(true);
    try {
      const bodyPartExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=${newLimit}`,
        exerciseOption
      );
      console.log(bodyPartExercisesData);
      setBodyPartExercises(bodyPartExercisesData);
      setLimit(newLimit); // Update limit after fetching data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching body parts:", error);
      setLoading(false);
    }
  };
  

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
                        title={part.charAt(0).toUpperCase()+part.slice(1)}
                        fetchPartExercise={() => fetchPartExercise(part)} // Pass the body part correctly
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
                    style={{ position: "absolute", left: "50%", marginTop:'3rem' }}
                  />
                  <div
                    className="exercise-container"
                    style={{ marginTop: "3rem" }}
                  >
                    {Array.isArray(bodyPartExercises) && bodyPartExercises.length > 0 ? (
                      bodyPartExercises.map((exercise) => (
                        <ExerciseCard
                          key={exercise.id} // Add key prop
                          id={exercise.id} // Pass id as prop
                          gif={exercise.gifUrl}
                          title={exercise.name.charAt(0).toUpperCase()+exercise.name.slice(1)}
                          target={exercise.target}
                          secondary1={exercise.secondaryMuscles[0]}
                          secondary2={exercise.secondaryMuscles[1]}
                        />
                      ))
                    ) : (
                      <p disabled={selectedBodyPart==true}>No exercises found.</p>
                    )}
                  </div>
                  <div className="pageController">
                    <button style={{width:'9rem',}} className="btn" onClick={handlePrevPage} disabled={limit<=14}>Prev</button>
                    <button style={{width: '9rem'}} className="btn" onClick={handleNextPage} disabled={selectedBodyPart==false}>Next</button>
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
