// Me importing my pages and components
import StarshipPage from '../pages/StarshipPage';
import StarshipsList from '../pages/StarshipsList';
import Footer from './Footer';
import Nav from './Nav';
// Importing useState for a default and useEffect to fetch an API
import React, { useState, useEffect } from 'react';
// Routes wraps each individual route w React Router v6
import { Routes, Route } from 'react-router-dom'
import '../App.css';

function Main() {
  const [ships, setShips] = useState(null)

  function getShips () {
    fetch('https://swapi.dev/api/starships')
    .then((res) => res.json())
    .then((res) => setShips(res.results))
  }

  useEffect(() => {
    getShips()
  }, [])
  console.log(ships)

  if(!ships) {
    return( 
      <>
        <h2>Loading</h2>
      </>
    )
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<StarshipsList ships={ships}/>} />
        <Route path='/:id' element={<StarshipPage ships={ships}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
