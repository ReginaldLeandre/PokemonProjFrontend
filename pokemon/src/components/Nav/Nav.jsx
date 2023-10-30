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
    return (
        <>
        <div className="flex ">
            <Link to='/'>
            <img className="ml-4 h-[50px] hover:scale-110" src={Home} alt="Pokemon"/>
            </Link>
            <Link to="/pokeballs">
            <img className="h-[50px] hover:scale-110" src={PokeBalls} alt="Pokeballs"/>
            </Link>
            <Link to="/search">
            <img className="h-[50px] hover:scale-110" src={Search} alt="Find Pokemon"/>
            </Link>
            <Link to="/encounter">
            <img className="h-[50px] hover:scale-110" src={Encounter} alt="Encounter"/>
            </Link>

            <span onClick={() => seOpenProfile((prev) => !prev)}>
                <FaBars />
            </span>

        </div>
        {
            openProfile && <DropDown />
        }
        </>
    )
}

export default Nav


