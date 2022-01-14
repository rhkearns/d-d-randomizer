import React from 'react';
import { classes } from '../data';

const Class = ({classType, setClassType, rng}) => {
  const genRandClass = () => {
    let idx = rng(classes.length)
    setClassType(classes[idx])
  }

  return (
    <>
      <h2>Class</h2>
      <h1>{classType}</h1>
      <button onClick={() => genRandClass()}>Randomize Class</button>
    </>
  )
}

export default Class