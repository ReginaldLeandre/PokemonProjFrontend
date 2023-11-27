import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Home from '../../assets/Home.png'
import PokeBalls from '../../assets/PokeBalls.png'
import Search from '../../assets/Search.png'
import Encounter from '../../assets/Encounter.png'
import PokeBallIcon from '../../assets/pokeballspinner.png'
import { useState } from 'react'
import DropDown from '../DropDown/DropDown'
import { FaBars } from 'react-icons/fa'
import { BsCart, BsPersonLinesFill, BsPersonCircle, BsBoxArrowInRight } from 'react-icons/bs'
import { useCart } from '../../data/CartContext'
import { useDropDown }  from '../../data/DropDownContext'
import { clearUserToken } from '../../utilities/token/auth-token'

const Nav = () => {
    const { openDropdown, handleOpenDropdown, handleExtraDropDown} = useDropDown()
    const { cartData, loading } = useCart()
    const token = localStorage.getItem("token")
    
    const [ displayDropdown, setDisplayDropdown] = useState(false)

    function handleLogOut(){
        clearUserToken()
    }

    return (
        <>
        <div className="flex justify-between bg-poke-lightblue w-full sticky top-0">
            <div className="md:flex hidden">
                <Link to='/'>
                <img className="ml-4 h-[50px] max-w-[135px] hover:scale-110" src={Home} alt="Pokemon"/>
                </Link>
                <Link to="/pokeballs">
                <img className="h-[50px] max-w-[153px] hover:scale-110" src={PokeBalls} alt="Pokeballs"/>
                </Link>
                <Link to="/search">
                <img className="h-[50px] max-w-[176px] hover:scale-110" src={Search} alt="Find Pokemon"/>
                </Link>
                { token && (<div>
                <Link to="/encounter">
                    <img className="h-[50px] max-w-[152px] hover:scale-110" src={Encounter} alt="Encounter"/>
                </Link>
                </div>)}
            </div>
            <div className="flex items-center md:hidden w-full">
                <div onClick={() => handleOpenDropdown()}>
                    <div className="text-xl ml-2 hover:bg-poke-grayblue p-2 rounded">
                    <FaBars/>
                    </div>
                </div>
                <img src={PokeBallIcon} alt="Poke Ball Icon" className="h-[48px] mx-auto"/>
            </div>
            <div className="flex gap-10">
                { token && !loading && (
                    <div className="my-auto md:mx-0 mr-6 hover:scale-105">
                    <Link to="/indexCart">
                        <div className="my-auto">
                            <BsCart className="text-[36px] inline" />
                            {cartData.totalItems > 0 && <span className="ml-[-10px] mt-[-5px] absolute h-6 w-6 bg-gradient-to-tr from-red-600 to-red-400 rounded-full text-white font-bold">{cartData.totalItems}</span>}
                        </div>
                    </Link>
                    </div>
                )}
                { token? (
                    <div className="hidden md:block text-2xl rounded-lg my-auto px-2 pt-1 mr-6 hover:bg-poke-grayblue" onClick={() => handleOpenDropdown()}>
                        <button>
                            <BsPersonLinesFill />
                        </button>
                    </div>
                ):(<div className="ml-auto mr-6 w-max">
                <Link to="/auth">
                    <p className="rounded-lg hover:bg-poke-blue bg-poke-darkblue text-white mt-2 py-1 px-2 text-lg font-bold">Sign In</p>
                </Link>
            </div>)}
            </div>
            
        </div>
        {
            openDropdown && <DropDown />
        }
        { openDropdown && (
            <div className="z-20 bg-poke-lightblue flex flex-col fixed w-full top-[48px] md:top-[50px] md:hidden font-[PKMN]">
                <Link to='/' className="hover:bg-poke-grayblue" onClick={() => handleExtraDropDown()}>
                <p className="text-lg py-3">Pokémon</p>
                </Link>
                <Link to="/pokeballs" className="hover:bg-poke-grayblue" onClick={() => handleExtraDropDown()}>
                <p className="text-lg py-3">Poké Balls</p>
                </Link>
                <Link to="/search" className="hover:bg-poke-grayblue" onClick={() => handleExtraDropDown()}>
                <p className="text-lg py-3">Find Pokémon</p>
                </Link>
                { token && (<div className="hover:bg-poke-grayblue" onClick={() => handleExtraDropDown()}>
                <Link to="/encounter">
                <p className="text-lg py-3">Encounter</p>
                </Link>
                </div>)}
            <div>
            { token && (
            <div className="flex flex-col bg-poke-lightblue">
                <ul className="flex flex-col">
                    <Link to={'/user/profile'} onClick={() => handleExtraDropDown()}>
                    <li className="hover:bg-poke-grayblue text-lg py-3 hover:cursor-pointer" >
                        <button >Profile</button>
                        <BsPersonCircle className="text-[24px] inline ml-2"/>
                    </li>
                    </Link>
                    <div onClick={() => handleExtraDropDown()}>
                        <li className="hover:bg-poke-grayblue text-lg hover:cursor-pointer py-3" onClick={handleLogOut}>
                            <button>Log Out</button>
                            <BsBoxArrowInRight className="text-[24px] inline ml-2"/>
                        </li>
                    </div>
                    
                </ul>
            </div> )}
        </div>
        </div>
        )}
        
        </>
    )
}

export default Nav


