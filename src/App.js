import StarshipPage from './components/StarshipPage';
import StarshipsList from './components/StarshipsList';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  const [ships, setShips] = useState(null)

  function getShips () {
    fetch('https://swapi.dev/api/starships')
    .then((res) => res.json())
    .then((res) => setShips(res))
  }

  useEffect(() => {
    getShips()
  }, [])
  // console.log(ships)
  if(!ships) {
    return( 
      <>
        <h2>Loading</h2>
      </>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<StarshipsList />} />
      <Route path='/:id' element={<StarshipPage thisProp={"This is a prop"}/>} />
    </Routes>
  );
}

export default App;
