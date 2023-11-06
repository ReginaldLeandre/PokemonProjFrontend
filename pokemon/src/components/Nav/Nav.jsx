import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Home from '../../assets/Home.png'
import PokeBalls from '../../assets/PokeBalls.png'
import Search from '../../assets/Search.png'
import Encounter from '../../assets/Encounter.png'
import CartCheckout from '../../assets/cartcheckout.png'
import { useState } from 'react'
import DropDown from '../DropDown/DropDown'
import { FaBars } from 'react-icons/fa'
import { showCart } from '../../utilities/service/cart-service'



const Nav = () => {
    const [ openProfile, seOpenProfile] = useState(false)
    const [ cartData, setCartData] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const token = localStorage.getItem("token")


    useEffect(() => {
        async function handleRequest() {
          try {
            
            const cartResponse = await showCart()
            console.log("this is cartResponse: ", cartResponse)
            if (cartResponse) {
              setCartData(cartResponse)
              console.log("this is cartData: ", cartData)
              setLoading(false)
            }
          } catch (error) {
            console.error(error)
          }
        }

        if(loading === true) {
          handleRequest()
        }
      }, [])

   

    return (
        <>
        <div className="flex bg-poke-darkblue w-max">
            <Link to='/'>
            <img className="ml-4 h-[50px] hover:scale-110" src={Home} alt="Pokemon"/>
            </Link>
            <Link to="/pokeballs">
            <img className="h-[50px] hover:scale-110" src={PokeBalls} alt="Pokeballs"/>
            </Link>
            <Link to="/search">
            <img className="h-[50px] hover:scale-110" src={Search} alt="Find Pokemon"/>
            </Link>
            { token? (
            <div className="flex bg-poke-lightblue">
                <Link to="/encounter">
                    <img className="h-[50px] hover:scale-110" src={Encounter} alt="Encounter"/>
                </Link>
                { !loading && (
                <div>
                    <Link to="/indexCart">
                        <img className="w-10 mt-1 inline" src={CartCheckout} alt="shopping cart"/>
                    </Link>
                    <span className="mx-2">({cartData.totalItems})</span>
                </div>
                )}
                <div className="border-[1px] border-[black] rounded-lg my-auto px-2 pt-1 hover:bg-[gray]">
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


