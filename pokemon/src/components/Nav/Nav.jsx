import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../../assets/Home.png'
import PokeBalls from '../../assets/PokeBalls.png'
import Search from '../../assets/Search.png'
import Encounter from '../../assets/Encounter.png'

const Nav = () => {
    return (
        <div className="flex">
            <Link to='/'>
            <img className="ml-4 h-[50px]" src={Home} alt="Pokemon"/>
            </Link>
            <Link to="/pokeballs">
            <img className="h-[50px]" src={PokeBalls} alt="Pokeballs"/>
            </Link>
            <Link to="/search">
            <img className="h-[50px]" src={Search} alt="Find Pokemon"/>
            </Link>
            <Link to="/encounter">
            <img className="h-[50px]" src={Encounter} alt="Encounter"/>
            </Link>
        </div>
    )
}

export default Nav;