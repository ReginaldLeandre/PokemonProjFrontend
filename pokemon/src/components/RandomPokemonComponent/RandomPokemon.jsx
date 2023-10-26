import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getRanPoke } from '../../utilities/service/pokemon-service'

const RandomPokemon = () => {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)

      useEffect(() => {
        async function handleRequest() {
          try {
            
            const pokeResponse = await getRanPoke()
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
        <h1 className="text-4xl my-4">Here are some Pokemon you can buy: </h1>
        <ul className="grid grid-cols-5 gap-4 mx-4 ">
          {pokeData.map((pokemon) => (
            <li key={pokemon.pokeDexId} className="hover:scale-105 border-[8px] border-poke-yellow rounded-md">
              <Link to={`poke/${pokemon.pokeDexId}`}>
              <img className="border-[8px] border-poke-lightyellow bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200"
                  src={pokemon.home}
                  alt={pokemon.pokemonName}
                />
                <div className="bg-poke-lightyellow">
                  <h3 className="pt-2">{pokemon.pokemonName}</h3>
                  <h4 className="pb-2">#{pokemon.pokeDexId}</h4>
                  <h4>${pokemon.price}</h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p className="loading">Loading...</p>
    )}
  </div>
  )
}

export default RandomPokemon