import React from 'react'
import pokemonGrassBg from '../../../assets/pokemon-grass-background.jpeg'
import { useNavigate } from 'react-router-dom'
import EncounterBag from '../EncounterBag/EncounterBag'
import { useState, useEffect } from 'react';
import { encounterPoke } from '../../../utilities/service/pokemon-service'
import Spinner from '../../Spinner/Spinner';

const EncounterMain = () => {
    const navigate = useNavigate();
    const [pokeData, setPokeData] = useState()
    const [openBag, setOpenBag] = useState(false);
    const [loading, setLoading] = useState(true)
    
    function handleRun() {
        window.location.reload()
    }

    function handleBag() {
        setOpenBag(true);
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


    return ( 
        <div>
        { !loading ? (
            <div className="flex gap-10 w-max mx-auto">
       
        <div className="flex flex-col w-max border-[2px] border-[black] mt-10 font-[PKMN]">
            <div className="flex items-center justify-center">
                <img src={pokemonGrassBg} alt="grass background scene from Pokemon" className="max-w-[80vw]"/>
                <img className="absolute w-[20%]" src={pokeData.home} alt={pokeData.pokemonName}/>
            </div>
            <div className="grid grid-cols-3 w-[900px] max-w-[80vw]">
                <div className="border-[black] border-r-[1px] border-t-[1px] col-span-2">
                    <p className="sm:text-2xl p-4">A wild {pokeData.pokemonName.charAt(0).toUpperCase() + pokeData.pokemonName.slice(1)} appeared! What will you do?</p>
                </div>
                <div className="sm:text-2xl grid">
                    <p className="border-[1px] border-[black] border-l-0 border-r-0 p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleRun}>Run</p>
                    <p className="p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleBag}>Bag</p>
                </div>
            </div>
        </div>
        <div className="w-max mt-10">
            {openBag &&
            <EncounterBag pokeDexId={pokeData.pokeDexId}/>
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