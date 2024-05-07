
import { useState } from 'react';
import './App.css';
import HeroBanner from './components/Hero Banner/HeroBanner';
import { exerciseOption, fetchData } from './Utils/FetchData';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {

const[search, setSearch] = useState("")
const[exercises, setExercises] = useState([])


const handleChange=(e)=>{
  setSearch(e.target.value)
}

const handleSubmit = async (e) => {
  e.preventDefault();
  if (search) {
    try {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=30', exerciseOption);
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
      console.log(exercisesData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  }
};


  return (
   <>
    <Navbar/>
    <HeroBanner/>
    <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} search={search} />
   </>
  );
}

export default App;
