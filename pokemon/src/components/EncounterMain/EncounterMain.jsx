import React from 'react'
import pokemonGrassBg from '../../assets/pokemon-grass-background.jpeg'
import { useNavigate } from 'react-router-dom'
import EncounterBag from '../EncounterBag/EncounterBag'
import {useState} from 'react';

const EncounterMain = () => {
    const navigate = useNavigate();

    const [openBag, setOpenBag] = useState(false);
    
    function handleRun() {
        navigate('/')
    }

    function handleBag() {
        setOpenBag(true);
    }

    return (
    <div className="flex gap-10 w-max mx-auto">
        <div className="flex flex-col w-max border-[2px] border-[black] mt-10 font-[PKMN]">
            <div className="flex items-center justify-center">
                <img src={pokemonGrassBg} alt="grass background scene from Pokemon" className="max-w-[80vw]"/>
                <img className="absolute w-[20%]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"/>
            </div>
            <div className="grid grid-cols-3 w-[900px] max-w-[80vw]">
                <div className="border-[black] border-r-[1px] border-t-[1px] col-span-2">
                    <p className="sm:text-2xl p-4">A wild Pokémon appeared! What will you do?</p>
                </div>
                <div className="sm:text-2xl grid">
                    <p className="border-[1px] border-[black] border-l-0 border-r-0 p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleRun}>Run</p>
                    <p className="p-4 hover:bg-gray-300 hover:cursor-pointer" onClick={handleBag}>Bag</p>
                </div>
            </div>
        </div>
        <div className="w-max mt-10">
            {openBag &&
            <EncounterBag/>
            }
        </div>
    </div>
    )
}

export default EncounterMain