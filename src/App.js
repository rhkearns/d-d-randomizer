import './App.css';
import { useState } from 'react'
import Class from './components/Class';
import Race from './components/Race';
import Subclass from './components/Subclass';

function App() {
  const [character, setCharacter]= useState({
    'Race': '',
    'Class': '',
    'Subclass': ''
  })
  
  function rng(length) {
    return Math.floor(Math.random() * (length - 0) + 0)
  }

  return (
    <div className="App">
      <h1>D&D Randomizer</h1>
      <h3>Create A Random Character for Dungeons and Dragons</h3>
      <Race character={character} setCharacter={setCharacter} rng={rng}/>
      <Class />
      <Subclass />
    </div>
  );
}

export default App;
