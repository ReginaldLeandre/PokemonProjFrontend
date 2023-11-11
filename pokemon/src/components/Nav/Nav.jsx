import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Home from '../../assets/Home.png'
import PokeBalls from '../../assets/PokeBalls.png'
import Search from '../../assets/Search.png'
import Encounter from '../../assets/Encounter.png'
import { useState } from 'react'
import DropDown from '../DropDown/DropDown'
import { FaBars } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { useCart } from '../../data/CartContext'
import { useDropDown }  from '../../data/DropDownContext'


const Nav = () => {
    const { openDropdown, handleOpenDrowndown, handleExtraDropDown} = useDropDown()
    const { cartData, loading } = useCart()
    const token = localStorage.getItem("token")

   
    return (
        <>
        <div className="flex justify-between bg-poke-lightblue w-full">
            <div className="flex">
                <Link to='/'>
                <img className="min-w-max ml-4 h-[50px] hover:scale-110" src={Home} alt="Pokemon"/>
                </Link>
                <Link to="/pokeballs">
                <img className="min-w-max h-[50px] hover:scale-110" src={PokeBalls} alt="Pokeballs"/>
                </Link>
                <Link to="/search">
                <img className="min-w-max h-[50px] hover:scale-110" src={Search} alt="Find Pokemon"/>
                </Link>
                { token && (<div>
                <Link to="/encounter">
                    <img className="min-w-max h-[50px] hover:scale-110" src={Encounter} alt="Encounter"/>
                </Link>
                </div>)}
            </div>
            <div className="flex gap-10">
                { token && !loading && (
                     <div className="my-auto">
                     <Link to="/indexCart">
                        <div className="my-auto">
                            <BsCart className="text-[36px] inline mt-2" />
                        {cartData && <span className="ml-[-10px] absolute h-6 w-6 bg-gradient-to-tr from-red-600 to-red-400 rounded-full text-white font-bold">{cartData.totalItems}</span>}
                        </div>
                    </Link>
                   </div>
                 )}
                { token? (
                    <div className="text-lg rounded-lg my-auto px-2 pt-1 mr-6 hover:bg-poke-grayblue" onClick={() => handleOpenDrowndown()}>
                        <button>
                            <FaBars />
                        </button>
                    </div>
                ):(<div className="ml-auto mr-6">
                <Link to="/auth">
                    <p className="rounded-lg hover:bg-poke-blue bg-poke-darkblue text-white mt-2 py-1 px-2 text-lg font-bold">Sign In</p>
                </Link>
            </div>)}
            </div>
            
        </div>
        {
            openDropdown && <DropDown />
        }
        </>
    )
}

export default Nav


