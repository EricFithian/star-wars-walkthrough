import StarshipPage from './components/StarshipPage';
import StarshipsList from './components/StarshipsList';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StarshipsList />} />
      <Route path='/:id' element={<StarshipPage thisProp={"This is a prop"}/>} />
    </Routes>
  );
}

export default App;
