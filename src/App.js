import { useState, useEffect } from "react";
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
      const searchedExercise = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${search}?limit=14`,
        exerciseOption
      );
      setBodyPartExercises(searchedExercise);
      console.log(searchedExercise);
      setSearch("");
    } catch (error) {
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
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=14`,
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
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
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
                    className="bodyPart-container" id="bodyPart-container"
                    style={{ marginTop: "3rem" }}
                  >
                    {bodyPart.map((part) => (
                      <BodyPart
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
                  <div
                    className="exercise-container"
                    style={{ marginTop: "3rem" }}
                  >
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
            }
          />
          <Route path="/exercises/:id" element={<ExercisePageDetails/>}/> 
          <Route path="/about" element={<About/>}/>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
