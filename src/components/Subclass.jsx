import React, {useState, useEffect} from 'react';
import * as subclassData from '../subclassData'

const Subclass = ({classType, subclass, setSubclass, rng}) => {
  const [subclassArray, setSubclassArray] = useState()
  
  const fetchSubclassData = (classType) => {
    switch (classType) {
      case 'Barbarian':
        setSubclassArray(subclassData.barbarianSubclasses)
        break;
      case 'Bard':
        setSubclassArray(subclassData.bardSubclasses)
        break;
      case 'Cleric':
        setSubclassArray(subclassData.clericSubclasses)
        break;
      case 'Druid':
        setSubclassArray(subclassData.druidSubclasses)
        break;
      case 'Fighter':
        setSubclassArray(subclassData.fighterSubclasses)
        break;
      case 'Monk':
        setSubclassArray(subclassData.monkSubclasses)
        break;
      case 'Paladin':
        setSubclassArray(subclassData.paladinSubclasses)
        break;
      case 'Ranger':
        setSubclassArray(subclassData.rangerSubclasses)
        break;
      case 'Rogue':
        setSubclassArray(subclassData.rogueSubclasses)
        break;
      case 'Sorcerer':
        setSubclassArray(subclassData.sorcererSubclasses)
        break;
      case 'Warlock':
        setSubclassArray(subclassData.warlockSubclasses)
        break;
      case 'Wizard':
        setSubclassArray(subclassData.wizardSubclasses)
        break;
      case 'Artificer':
        setSubclassArray(subclassData.artificerSubclasses)
        break;
      default:
        break;
    }
  }

  const genRandSubclass = () => {
    let idx = rng(subclassArray.length)
    setSubclass(subclassArray[idx])
  }

  useEffect(() => {
    setSubclass('')
    fetchSubclassData(classType)
  }, [classType])


  return (
    <>
      <h2>Subclass</h2>
      <h1>{subclass}</h1>
      <button onClick={() => genRandSubclass()}>Randomize Subclass</button>
    </>
  )
}

export default Subclass