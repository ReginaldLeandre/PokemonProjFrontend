import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getRanPoke } from '../utilities/service/pokemon-service'

const RandomPokemon = () => {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)

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
      useEffect(() => {
        handleRequest()
      }, [loading])

  return (
    <div className="">
    {!loading ? (
      <>
        <h1>Here are some Pokemon you can buy: </h1>
        <ul className="">
          {pokeData.map((pokemon) => (
            <li key={pokemon.pokeDexId} className="">
              <Link to={`/${pokemon.pokeDexId}`}>
              <img
                  src={pokemon.dreamWorld ? pokemon.dreamWorld : pokemon.front}
                  alt={pokemon.pokemonName}
                />
                <h3 className="">{pokemon.pokemonName}</h3>
                <h4 className="">#{pokemon.pokeDexId}</h4>
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