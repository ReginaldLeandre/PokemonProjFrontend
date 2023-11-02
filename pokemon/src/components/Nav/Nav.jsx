import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../../assets/Home.png'
import PokeBalls from '../../assets/PokeBalls.png'
import Search from '../../assets/Search.png'
import Encounter from '../../assets/Encounter.png'
import { useState } from 'react'
import DropDown from '../DropDown/DropDown'
import { FaBars } from 'react-icons/fa'




const Nav = () => {
    const [ openProfile, seOpenProfile] = useState(false)
    const token = localStorage.getItem("token");

    return (
        <>
        <div className="flex">
            <Link to='/'>
            <img className="ml-4 h-[50px] hover:scale-110" src={Home} alt="Pokemon"/>
            </Link>
            <Link to="/pokeballs">
            <img className="h-[50px] hover:scale-110" src={PokeBalls} alt="Pokeballs"/>
            </Link>
            <Link to="/search">
            <img className="h-[50px] hover:scale-110" src={Search} alt="Find Pokemon"/>
            </Link>
            { token ? (
            <div>
            <Link to="/encounter">
            <img className="h-[50px] hover:scale-110" src={Encounter} alt="Encounter"/>
            </Link>
            <div className="my-auto ml-auto mr-6 border-[1px] border-[black] rounded-lg px-2 pt-1 hover:bg-[gray]">
                <button onClick={() => seOpenProfile((prev) => !prev)}>
                    <FaBars />
                </button>
            </div>
            </div>
            ) : (<div className="ml-auto mr-6">
                <Link to="/auth">
                    <p className="rounded-lg hover:bg-poke-blue bg-poke-darkblue text-white font-bold mt-2 py-1 px-2 text-xl">Sign In</p>
                </Link>
            </div>)
            }
            

        </div>
        {
            openProfile && <DropDown />
        }
    
        </>
    )
}

export default Nav


