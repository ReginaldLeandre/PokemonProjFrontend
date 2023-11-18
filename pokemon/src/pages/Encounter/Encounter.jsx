import React from 'react'
import EncounterMain from '../../components/EncounterComponent/EncounterMain/EncounterMain'
import { Link } from 'react-router-dom'


const Encounter = () => {
  const token = localStorage.getItem("token")
  return (
<>
{ token ? (

    <div>
        <EncounterMain/>
    </div>
    
    ) : (
        <div>
          <p className='font-[PKMN] text-xl'>
            You are not Signed In. Please <Link to={'/auth'} className="text-blue-400 hover:text-poke-blue">Sign In</Link> to view this page.
            </p>
        </div>

    )}

</>
    
  )
}

export default Encounter