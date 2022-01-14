import './App.css';
import { useState } from 'react'
import Class from './components/Class';
import Race from './components/Race';
import Subclass from './components/Subclass';

function App() {
  const [character, setCharacter]= useState({})
  


  return (
    <div className="App">
      <h1>D&D Randomizer</h1>
      <h3>Create A Random Character for Dungeons and Dragons</h3>
      <Race />
      <Class />
      <Subclass />
    </div>
  );
}

export default App;
