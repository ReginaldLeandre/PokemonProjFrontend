import React from 'react'
import pokemonGrassBg from '../../../assets/pokemon-grass-background.jpeg'
import { useState, useEffect } from 'react';
import { encounterPoke } from '../../../utilities/service/pokemon-service'
import Spinner from '../../Spinner/Spinner';
import { catchPoke } from '../../../utilities/service/pokemon-service'
import { getPokeBalls } from '../../../utilities/service/auth-service'
import { Link } from 'react-router-dom';
import PokeBall from '../../../assets/pokeballs/caught/pokeball.png'
import GreatBall from '../../../assets/pokeballs/caught/greatball.png'
import UltraBall from '../../../assets/pokeballs/caught/ultraball.png'
import MasterBall from '../../../assets/pokeballs/caught/masterball.png'

const EncounterMain = () => {
    const [pokeData, setPokeData] = useState()
    const [ userBallData, setUserBallData] = useState([])
    const [openBag, setOpenBag] = useState(false);
    const [loading, setLoading] = useState(true)
    const [catchMsg, setCatchMsg] = useState(null)
    const [loading2, setLoading2] = useState(true)

    const refreshPokeBalls = async () => {
        try {
          const userBallResponse = await getPokeBalls()
          console.log("This is userBallResponse: ", userBallResponse)
          if (userBallResponse) {
            setUserBallData(userBallResponse)
            setLoading2(false)
          }
        } catch (error) {
          console.error("This is the refreshCart error: ", error)
        }
      }


    function handleRun() {
        window.location.reload()
    }

    function handleBag() {
        setOpenBag((prev) => !prev);
    }
    useEffect(() => {
        if (loading2) {
        refreshPokeBalls()
        }
      }, [loading2])



    useEffect(() => {
        async function handleRequest() {
          try {
            const pokeResponse = await encounterPoke()
            console.log("this is pokeResponse: ", pokeResponse)
            const userBallResponse = await getPokeBalls()
            console.log("this is userBallResponse: ", userBallResponse)


            if(userBallResponse) {
                setUserBallData(userBallResponse)
            }

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
            const catchResponse = await catchPoke(pokeData.pokemon.pokeDexId, ballType)
            console.log("This is the catch Response: ", catchResponse)
            setCatchMsg(catchResponse)
            refreshPokeBalls()
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
                  {catchMsg.changeToPokeball ? (
                      <div className="absolute w-[200px]">
                      {catchMsg.pokemon.pokeBall === 'PokeBall' &&  (
                        <img src={PokeBall} alt="Poké Ball"/>
                      )}
                      {catchMsg.pokemon.pokeBall === 'GreatBall' &&  (
                        <img src={GreatBall} alt="Great Ball"/>
                      )}
                      {catchMsg.pokemon.pokeBall === 'UltraBall' &&  (
                        <img src={UltraBall} alt="Ultra Ball"/>
                      )}
                      {catchMsg.pokemon.pokeBall === 'MasterBall' &&  (
                        <img src={MasterBall} alt="Master Ball"/>
                      )}
                    </div>
                  ) : (
                    <img className="absolute w-[40%] sm:w-[30%] md:w-[20%]" src={pokeData.pokemon.home} alt={pokeData.pokemon.pokemonName}/>
                    )}
              </div>
              <div className="grid grid-cols-3 w-[540px] xl:w-[720px] max-w-[80vw]">
                  <div className="border-[black] border-r-[1px] border-t-[1px] col-span-2">
                      {catchMsg? 
                      (
                        <p className="md:text-2xl p-4">{catchMsg.catchingPokemonMsg}</p>
                      ) : (
                        <p className="md:text-2xl p-4">A wild {pokeData.pokemon.pokemonName.charAt(0).toUpperCase() + pokeData.pokemon.pokemonName.slice(1)} appeared! What will you do?</p>
                      )}
                  </div>
                  <div className="md:text-2xl grid">
                      <p className="border-[1px] border-[black] border-l-0 border-r-0 p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleRun}>Run</p>
                      <p className="p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleBag}>Bag</p>
                  </div>
              </div>
          </div>
          { openBag &&
          <div className="lg:w-max mt-10">
            <div className="border-[2px] border-[black] mx-auto lg:mx-0 w-[240px] md:w-[400px] md:text-xl lg:w-[300px] font-[PKMN]">
              <div className="p-4">Bag</div>
              {userBallData.availableBalls.length ? (
                <div>
                  {userBallData.availableBalls.map((ball) => (
                  <div className="border-t-[1px] border-[black] p-2">
                      <div className="flex justify-around my-1">
                          <p>{ball.ballType}</p>
                          <p>{ball.quantity}x</p>
                      </div>
                      <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white" onClick={() => handleCatch(ball.ballType)}>USE</button>
                    </div>                       
                  ))                                      
                  }
                </div>
              ) : (
                <div className="border-t-[1px] border-[black] p-2">
                  <p className="mb-2">You don't own any Poké Balls yet.</p>
                  <p>Visit <Link to="/pokeballs" className="text-blue-400 hover:text-poke-blue">Poké Balls</Link> to buy them.</p>
                </div>
              )}
            </div>       
          </div>}
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