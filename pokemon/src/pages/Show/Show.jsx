import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { show } from '../../utilities/service/pokemon-service'
import './Show.css'
import Spinner from '../../components/Spinner/Spinner'



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
      <div className="lg:flex w-max mx-auto">
        <div className="flex flex-col w-[300px] bg-poke-yellow border-[8px] border-poke-yellow rounded m-10 h-max">
          <h2>#{pokeData.pokeDexId}</h2>
          <img className="w-[300px] border-[8px] border-poke-lightyellow bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200"
          src={pokeData.home}
          alt={pokeData.pokemonName}
          />
          <h2 className="bg-poke-lightyellow">{pokeData.pokemonName.charAt(0).toUpperCase()+pokeData.pokemonName.slice(1)}</h2>
          <ul className="bg-poke-lightyellow flex justify-center">
          {pokeData.type && pokeData.type.map((pokeType, index) => (
              <li className={`${pokeType} px-3 m-2 rounded shadow-2xl`} key={index}>
              <p>{pokeType.charAt(0).toUpperCase() + pokeType.slice(1)}</p>
              </li>
          ))}
          </ul>
        </div>
          <div>
            <p className="border-[2px] my-10 mr-10 p-4 border-poke-blue bg-poke-lightyellow">{pokeData.description}</p>
            <div className="lg:flex">
              <table className="mr-10">
                <tr className="border-[2px]">
                  <td colspan='2' className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">Stats</td>
                </tr>
                {pokeData.stats && pokeData.stats.map((pokeStat, index) => (
                <tr key={index}>
                <td className="border-[2px] border-poke-blue px-4 py-1 bg-poke-lightyellow">{pokeStat.statName.charAt(0).toUpperCase() + pokeStat.statName.slice(1)}</td>
                <td className="border-[2px] border-poke-blue px-4 py-1 bg-poke-lightyellow">{pokeStat.statData}</td>
                </tr>
              ))} 
              </table> 
              <table className="mr-10 h-max">
                <tr>
                  <td colspan="2" className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">Abilities</td>
                </tr>
              {pokeData.abilities && pokeData.abilities.map((pokeAbility, index)=>(
                <tr key={index}>
                  <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{pokeAbility.abilityName.charAt(0).toUpperCase() + pokeAbility.abilityName.slice(1)}</td>
                  <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{pokeAbility.abilityDescription}</td>
                </tr>
              ))}
              </table>
            </div>


          </div>

      </div>
      </>
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

export default Show