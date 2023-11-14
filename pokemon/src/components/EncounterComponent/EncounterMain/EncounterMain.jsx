import React from 'react'
import pokemonGrassBg from '../../../assets/pokemon-grass-background.jpeg'
import { useState, useEffect } from 'react';
import { encounterPoke } from '../../../utilities/service/pokemon-service'
import Spinner from '../../Spinner/Spinner';
import { catchPoke } from '../../../utilities/service/pokemon-service'

const EncounterMain = () => {
    const [pokeData, setPokeData] = useState()
    const [openBag, setOpenBag] = useState(false);
    const [loading, setLoading] = useState(true)
    const [catchMsg, setCatchMsg] = useState(null)

    function handleRun() {
        window.location.reload()
    }

    function handleBag() {
        setOpenBag((prev) => !prev);
    }

    useEffect(() => {
        async function handleRequest() {
          try {
            const pokeResponse = await encounterPoke()
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
      }, [loading])

      const handleCatch = async (ballType) => {
        try {
            const catchResponse = await catchPoke(pokeData.pokeDexId, ballType)
            console.log("This is the catch Response: ", catchResponse)
            setCatchMsg(catchResponse)
        }
        catch(err) {
            console.error(err)
        }
      }

    return ( 
        <div>
        { !loading ? (
        <div className="lg:flex gap-10 w-max mx-auto">
          <div className="flex flex-col w-max border-[2px] border-[black] mt-10 font-[PKMN]">
              <div className="flex items-center justify-center">
                  <img src={pokemonGrassBg} alt="grass background scene from Pokemon" className="w-[540px] xl:w-[720px] max-w-[80vw]"/>
                  <img className="absolute w-[40%] sm:w-[30%] md:w-[20%]" src={pokeData.home} alt={pokeData.pokemonName}/>
              </div>
              <div className="grid grid-cols-3 w-[540px] xl:w-[720px] max-w-[80vw]">
                  <div className="border-[black] border-r-[1px] border-t-[1px] col-span-2">
                      {catchMsg? 
                      (
                        <p className="md:text-2xl p-4">{catchMsg.catchingPokemonMsg}</p>
                      ) : (
                        <p className="md:text-2xl p-4">A wild {pokeData.pokemonName.charAt(0).toUpperCase() + pokeData.pokemonName.slice(1)} appeared! What will you do?</p>
                      )}
                  </div>
                  <div className="md:text-2xl grid">
                      <p className="border-[1px] border-[black] border-l-0 border-r-0 p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleRun}>Run</p>
                      <p className="p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleBag}>Bag</p>
                  </div>
              </div>
          </div>
          <div className="lg:w-max mt-10">
              {openBag &&
              <div className="border-[2px] border-[black] mx-auto lg:mx-0 w-[240px] md:w-[400px] md:text-xl lg:w-[300px] font-[PKMN]">
              <div className="p-4">Bag</div>
              <div className="border-t-[1px] border-[black] p-2">
                  <div className="flex justify-around my-1">
                      <p>Poké Ball</p>
                      <p>x5</p>
                  </div>
                  <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white" onClick={() => handleCatch("PokeBall")}>USE</button>
              </div>
              <div className="border-t-[1px] border-[black] p-2">
                  <div className="flex justify-around my-1">
                      <p>Great Ball</p>
                      <p>x5</p>
                  </div>
                  <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white" onClick={() => handleCatch("GreatBall")}>USE</button>
              </div>
              <div className="border-t-[1px] border-[black] p-2">
                  <div className="flex justify-around my-1">
                      <p>Ultra Ball</p>
                      <p>x5</p>
                  </div>
                  <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white" onClick={() => handleCatch("UltraBall")}>USE</button>
              </div>
              <div className="border-t-[1px] border-[black] p-2">
                  <div className="flex justify-around my-1">
                      <p>Master Ball</p>
                      <p>x5</p>
                  </div>
                  <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white" onClick={() => handleCatch("MasterBall")}>USE</button>
              </div>
          </div>

              }
          </div>
        </div>
        ) : (
            <div className="w-max mx-auto mt-[100px]">
        <div className="flex justify-center">
        <Spinner/>
        </div>
        <p className="my-4 text-2xl font-[PKMN]">Loading...</p>
      </div>
        )
        }
        </div>
    
    )
}

export default EncounterMain