import React from 'react';
import { races } from '../data'

const Race = ({race, setRace, rng}) => {
  
  const genRandRace = () => {
    let idx = rng(races.length)
    setRace(races[idx])
  }

  return (
    <>
      <h2>Race</h2>
      <h1>{race}</h1>
      <button onClick={() => genRandRace()}>Randomize Race</button>
    </>
  )
}

export default Race