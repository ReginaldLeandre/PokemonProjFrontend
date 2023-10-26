import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { show } from '../../utilities/service/pokemon-service'


const Show = () => {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

      useEffect(() => {
        async function handleRequest() {
          try {
            
            const pokeResponse = await show(id)
            console.log("this is pokeResponse: ", pokeResponse)
            if (pokeResponse) {
              setPokeData(pokeResponse)
              console.log("this is pokeData: ", pokeData)
              setLoading(false)
            }
          } catch (error) {
            console.error(error)
          }
        }

        if(loading === true) {
          handleRequest()
        }
      }, [])



  return (
    <div className="">
    {!loading ? (
      <>
       <h4>#{pokeData.pokeDexId}</h4>
       <img className=""
                src={pokeData.home}
                alt={pokeData.pokemonName}
                />
       <h2>{pokeData.pokemonName}</h2>
       <ul className="">
       {pokeData.type && pokeData.type.map((pokeType, index) => (
            <li key={index} className=''>
            <p>{pokeType}</p>
            </li>
        
       ))}
       </ul>
       <p>{pokeData.description}</p>
       <h4>Stats</h4>
       <ul>
       {pokeData.stats && pokeData.stats.map((pokeStat, index) => (
        <li key={index}>
        <p>{pokeStat.statName}</p>
        <p>{pokeStat.statData}</p>
        </li>
        ))} 
        </ul> 


        <h4>Abilities</h4>
        <ul>
            {pokeData.abilities && pokeData.abilities.map((pokeAbility, index)=>(
                <li key={index}>
                <h5>{pokeAbility.name}</h5>
                <p>{pokeAbility.description}</p>
                </li>
            ))}
        </ul>



      </>
    ) : (
      <p className="">Loading...</p>
    )}
  </div>
  )
}

export default Show