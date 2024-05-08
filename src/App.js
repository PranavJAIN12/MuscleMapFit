import { useState, useEffect } from 'react';
import './App.css';
import HeroBanner from './components/Hero Banner/HeroBanner';
import { exerciseOption, fetchData } from './Utils/FetchData';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BodyPart from './BodyPart';

function App() {

  const [search, setSearch] = useState("");
  const [bodyPart, setBodyPart] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
  };

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption);
        setBodyPart(bodyPartsData);
        console.log("Body Parts:", bodyPartsData);
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    fetchBodyParts();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const fetchPartExercise= async()=>{
    console.log("button pressed")
    try{
    const bodyPartExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/back`, exerciseOption);
    console.log(bodyPartExercises)
  } catch (error) {
    console.error('Error fetching body parts:', error);
  }
  
  }

  return (
    <>
      <Navbar />
      <HeroBanner />
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} search={search} />
      <div>
        <h2 className='text-center'>Body Parts</h2>
        
        <div className='bodyPart-container'>
        {bodyPart.map((part)=>(
          <BodyPart title={part} fetchPartExercise={fetchPartExercise}/>
        ))}
        </div>
        
      </div>
    </>
  );
}

export default App;
