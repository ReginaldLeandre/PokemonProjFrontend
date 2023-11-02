import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getRanPoke } from '../../utilities/service/pokemon-service'
import Spinner from '../Spinner/Spinner.jsx'

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
    <div>
    {!loading ? (
      <div className="mb-4">
        {/* <h1 className="text-4xl my-4">Pokémon</h1> */}
        <ul className="grid grid-cols-5 gap-4 mx-4 my-8">
          {pokeData.map((pokemon) => (
            <li key={pokemon.pokeDexId}>
              <Link to={`poke/${pokemon.pokeDexId}`}>
                <div className="hover:scale-105 border-[8px] border-poke-yellow rounded-md">
                <img className="border-[8px] border-poke-lightyellow bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200"
                  src={pokemon.home}
                  alt={pokemon.pokemonName}
                />
                <div className="bg-poke-lightyellow flex justify-around">
                  <div>
                    <h3 className="pt-2">{pokemon.pokemonName.charAt(0).toUpperCase() + pokemon.pokemonName.slice(1)}</h3>
                    <h4 className="pb-2">#{pokemon.pokeDexId}</h4>
                  </div>
                </div>
                </div>
              <div className="w-max m-auto p-1 rounded my-2 text-xl">
              ${pokemon.price}
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="w-max mx-auto mt-[100px]">
        <div className="flex justify-center">
        <Spinner/>
        </div>
        <p className="my-4 text-2xl font-[PKMN]">Loading...</p>
      </div>
    )}
  </div>
  )
}

export default RandomPokemon