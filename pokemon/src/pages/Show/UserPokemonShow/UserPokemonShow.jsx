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
        <div className="flex flex-col w-[300px] mx-auto lg:m-10 bg-poke-yellow border-[8px] border-poke-yellow rounded mt-6 h-max">
          <h2>#{userPokData.pokemon.pokeDexId}</h2>
          <img className="w-[300px] border-[8px] border-poke-lightyellow bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200"
          src={userPokData.pokemon.home}
          alt={userPokData.pokemon.pokemonName}
          />
          <h2 className="bg-poke-lightyellow">{userPokData.pokemon.pokemonName.charAt(0).toUpperCase()+userPokData.pokemon.pokemonName.slice(1)}</h2>
          <ul className="bg-poke-lightyellow flex justify-center">
          {userPokData.pokemon.type && userPokData.pokemon.type.map((pokeType, index) => (
              <li className={`${pokeType} px-3 m-2 rounded shadow-2xl`} key={index}>
              <p>{pokeType.charAt(0).toUpperCase() + pokeType.slice(1)}</p>
              </li>
          ))}
          </ul>
        </div>
        <div>
          <p className="w-[300px] sm:w-[560px] border-[2px] my-10 mx-auto lg:mr-10 p-4 border-poke-blue bg-poke-lightyellow">{userPokData.pokemon.description}</p>
          <div className="sm:flex">
            <table className="lg:mr-10 mx-auto my-8 sm:my-0">
              <tbody>
                <tr className="border-[2px]">
                  <td colSpan='2' className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">Stats</td>
                </tr>
                {userPokData.pokemon.stats && userPokData.pokemon.stats.map((pokeStat, index) => (
                <tr key={index}>
                  <td className="border-[2px] border-poke-blue px-4 py-1 bg-poke-lightyellow">{pokeStat.statName.charAt(0).toUpperCase() + pokeStat.statName.slice(1)}</td>
                  <td className="border-[2px] border-poke-blue px-4 py-1 bg-poke-lightyellow">{pokeStat.statData}</td>
                </tr>
                ))} 
              </tbody>
              </table> 
              <table className="lg:mr-10 h-max w-[300px] mx-auto mb-6">
                <tbody>
                  <tr>
                    <td colSpan="2" className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">Abilities</td>
                  </tr>
                {userPokData.pokemon.abilities && userPokData.pokemon.abilities.map((pokeAbility, index)=>(
                  <tr key={index}>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{pokeAbility.abilityName.charAt(0).toUpperCase() + pokeAbility.abilityName.slice(1)}</td>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{pokeAbility.abilityDescription}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
            {userPokData.pokemon.caught ? (
              <table className="mt-10 mb-6 w-[300px] sm:w-[560px]">
                <tbody>
                  <tr>
                    <td colSpan="2" className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">
                      Trainer Details
                    </td>
                  </tr>
                  <tr>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">Trainer</td>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">
                      <Link to={"/user/profile"} className="text-blue-800 hover:text-blue-400">{userPokData.user.username}</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">Date Caught</td>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{userPokData.pokemon.caughtOrPurchased}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">Poké Ball Used</td>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">{userPokData.pokemon.pokeBall}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="mt-10 mb-6 w-[300px] sm:w-[560px]">
                <tbody>
                  <tr>
                    <td colSpan="2" className="border-[2px] border-poke-blue bg-poke-blue text-white font-bold">Trainer Details</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">Trainer</td>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">
                      <Link to={"/user/profile"} className="text-blue-800 hover:text-blue-400">{userPokData.user.username}</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">Date Purchased</td>
                    <td className="border-[2px] border-poke-blue px-4 py-2 bg-poke-lightyellow">
                      {userPokData.pokemon.caughtOrPurchased}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
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
