import '../Show.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import Spinner from '../../../components/Spinner/Spinner'
import { userPokeshow } from '../../../utilities/service/auth-service'

const UserPokemonShow = () => {
    const  [ userPokData, setUserPokData ] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

        useEffect(() => {
            async function handleRequest() {
            try {
                
                const userPokeResponse = await userPokeshow(id)
                console.log("this is userPokeResponse: ", userPokeResponse)
                if (userPokeResponse) {
                    setUserPokData(userPokeResponse)
                    setLoading(false)
                }
            } catch (error) {
                console.error(error)
            }
            }

            if(loading === true) {
            handleRequest()
            console.log("this is userPokData: ", userPokData)
            }
        }, [])

    return (
        <div className="">
    {!loading ? (
      <>
      <div className="lg:flex w-max mx-auto">
        <div className="flex flex-col w-[300px] bg-poke-yellow border-[8px] border-poke-yellow rounded m-10 h-max">
          <h2>#{userPokData.pokeDexId}</h2>
          <img className="w-[300px] border-[8px] border-poke-lightyellow bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200"
          src={userPokData.home}
          alt={userPokData.pokemonName}
          />
          <h2 className="bg-poke-lightyellow">{userPokData.pokemonName.charAt(0).toUpperCase()+userPokData.pokemonName.slice(1)}</h2>
          <ul className="bg-poke-lightyellow flex justify-center">
          {userPokData.type && userPokData.type.map((type, index) => (
              <li className={`${type} px-3 m-2 rounded shadow-2xl`} key={index}>
              <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
              </li>
          ))}
          </ul>
          <div className="p-3 bg-poke-lightyellow" >
          </div>
        </div>
          <div>
            <p className="border-[2px] my-10 mr-10 p-4 border-poke-blue bg-poke-lightyellow">{userPokData.description}</p>
            <div className="lg:flex">
              <table className="mr-10">
                <tbody>
                  <tr className="border-[2px]">
                    <td colSpan='2' className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">Stats</td>
                  </tr>
                  {userPokData.stats && userPokData.stats.map((pokeStat, index) => (
                  <tr key={index}>
                    <td className="border-[2px] border-poke-blue px-4 py-1 bg-poke-lightyellow">{pokeStat.statName.charAt(0).toUpperCase() + pokeStat.statName.slice(1)}</td>
                    <td className="border-[2px] border-poke-blue px-4 py-1 bg-poke-lightyellow">{pokeStat.statData}</td>
                  </tr>
                  ))} 
                </tbody>
                </table> 
              <table className="mr-10 h-max">
                <tbody>
                  <tr>
                    <td colSpan="2" className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">Abilities</td>
                  </tr>
                {userPokData.abilities && userPokData.abilities.map((pokeAbility, index)=>(
                  <tr key={index}>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{pokeAbility.name.charAt(0).toUpperCase() + pokeAbility.name.slice(1)}</td>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{pokeAbility.description}</td>
                  </tr>
                ))}
                </tbody>
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

export default UserPokemonShow
