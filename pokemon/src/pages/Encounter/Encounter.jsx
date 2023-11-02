import React from 'react'
import EncounterMain from '../../components/EncounterMain/EncounterMain'
import EncounterBag from '../../components/EncounterBag/EncounterBag'

const Encounter = () => {
  return (
    <div className="">
      <div className="">
        <EncounterMain/>
      </div>
      <div className="">
        <EncounterBag/>
      </div>
    </div>
  )
}

export default Encounter