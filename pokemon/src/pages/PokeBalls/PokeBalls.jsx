import React, { useState } from 'react'
import pokeball from '../../assets/pokeballs/pokeball.webp'
import greatball from '../../assets/pokeballs/greatball.webp'
import ultraball from '../../assets/pokeballs/ultraball.webp'
import masterball from '../../assets/pokeballs/masterball.webp'
import {BsCartPlus} from 'react-icons/bs'
import { useCart } from '../../data/CartContext'

const PokeBalls = () => {
    const { handleAddPokeBall } = useCart()
    const [pokeballMsg, setPokeballMsg] = useState(null)
    const token = localStorage.getItem("token");
    const handlePokeballMessage = async (ballType) => {
        try {
            const addingBall = await handleAddPokeBall(ballType)

            if (addingBall.masterBallError) {
              console.log("Masterball Error:", addingBall.masterBallError)
              setPokeballMsg(addingBall.masterBallError)
              setPokeballMsg(prevMsg => addingBall.masterBallError)
              setTimeout(() => {
                setPokeballMsg(null)
              }, 2000)
            }
            if (addingBall.pokeballCartMsg) {
             console.log("Pokeball Cart Message:", addingBall.pokeballCartMsg)
             setPokeballMsg(prevMsg => addingBall.pokeballCartMsg)
             setTimeout(() => {
                setPokeballMsg(null)
              }, 2000)
           }
         }
         catch (error) {
             console.error("Error adding PokeBall:", error)
             setPokeballMsg("Failed to add PokeBall to your Cart")
         }
      }

    return (
        <div>
            {pokeballMsg && pokeballMsg === 'A PokeBall has been added to your Cart' && 
                <div className="border-[1px] fixed top-[48px] md:top-[50px] right-0 bg-white w-[150px]">
                <div className="mx-auto my-4 flex items-center bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300 w-[60px] h-[60px]">
                    <img src={pokeball} alt="Poke Ball" className="w-[50px] mx-auto"/>
                </div>
                <p className="p-2">A Poké Ball has been added to your cart</p>
                </div>
            }
            {pokeballMsg && pokeballMsg === 'A GreatBall has been added to your Cart' && 
                <div className="border-[1px] fixed top-[48px] md:top-[50px] right-0 bg-white w-[150px]">
                <div className="mx-auto my-4 flex items-center bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300 w-[60px] h-[60px]">
                    <img src={greatball} alt="Poke Ball" className="w-[50px] mx-auto"/>
                </div>
                <p className="p-2">A Great Ball has been added to your cart</p>
                </div>
            }
            {pokeballMsg && pokeballMsg === 'A UltraBall has been added to your Cart' && 
                <div className="border-[1px] fixed top-[48px] md:top-[50px] right-0 bg-white w-[150px]">
                <div className="mx-auto my-4 flex items-center bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300 w-[60px] h-[60px]">
                    <img src={ultraball} alt="Poke Ball" className="w-[50px] mx-auto"/>
                </div>
                <p className="p-2">An Ultra Ball has been added to your cart</p>
                </div>
            }
            {pokeballMsg && pokeballMsg === 'A MasterBall has been added to your Cart' && 
                <div className="border-[1px] fixed top-[48px] md:top-[50px] right-0 bg-white w-[150px]">
                <div className="mx-auto my-4 flex items-center bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300 w-[60px] h-[60px]">
                    <img src={masterball} alt="Poke Ball" className="w-[50px] mx-auto"/>
                </div>
                <p className="p-2">A Master Ball has been added to your cart</p>
                </div>
            }
            <div className="top-[40px] sm:grid sm:grid-cols-2 xl:grid-cols-4 w-max mx-auto gap-[50px] mt-10">
                <div className="w-[240px] border-[2px] mb-10 sm:mb-0" >
                    <img className="p-4" src={pokeball} alt="Poke Ball"/>
                    <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                        <p>Poké Ball</p>
                        <p>$5</p>
                    </div>
                    { token && (
                    <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                        <p className="my-auto">Add to Cart</p>
                        <button className="hover:scale-105" onClick={() => handlePokeballMessage("PokeBall")}>
                            <BsCartPlus className="text-[32px]"/>
                        </button>
                    </div> 
                    )}
                    <p className="border-t-[2px] p-2 sm:px-2 sm:py-4">A device for catching wild Pokémon. It's thrown like a ball, comfortably encapsulating its target.</p>
                    
                    
                </div>
                <div className="w-[240px] border-[2px] mb-10 sm:mb-0">
                    <img className="p-4" src={greatball} alt="Great Ball"/>
                    <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                        <p>Great Ball</p>
                        <p>$10</p>
                    </div>
                    {token && (
                    <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                        <p className="my-auto">Add to Cart</p>
                        <button className="hover:scale-105" onClick={() => handlePokeballMessage("GreatBall")}>
                            <BsCartPlus className="text-[32px]"/>
                        </button>
                    </div>
                    )}
                    <p className="border-t-[2px] p-2">A type of Poké Ball that has a 50% higher chance to successfully catch a Pokémon than that of a regular Poké Ball.</p>
                </div>
                <div className="w-[240px] border-[2px] mb-10 sm:mb-0" >
                    <img className="p-4" src={ultraball} alt="Ultra Ball"/>
                    <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                        <p>Ultra Ball</p>
                        <p>$20</p>
                    </div>
                    { token && (
                    <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                        <p className="my-auto">Add to Cart</p>
                        <button className="hover:scale-105" onClick={() => handlePokeballMessage("UltraBall")}>
                            <BsCartPlus className="text-[32px]"/>
                        </button>
                    </div>
                    )}
                    <p className="border-t-[2px] p-2">A Poké Ball that has a 2x catch rate modifier, double of that of a standard Poké Ball and 33% more of that of a Great Ball.</p>
                </div>
                <div className="w-[240px] border-[2px] mb-10 sm:mb-0">
                    <img className="p-4" src={masterball} alt="Master Ball"/>
                    <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                        <p>Master Ball</p>
                        <p>$50</p>
                    </div>
                    { token && (
                    <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                        <p className="my-auto">Add to Cart</p>
                        <button className="hover:scale-105" onClick={() => handlePokeballMessage("MasterBall")}>
                            <BsCartPlus className="text-[32px]"/>
                        </button>
                    </div>
                    )}
                    <p className="border-t-[2px] px-3 py-2 sm:pt-8">A type of Poké Ball that is able to catch any type of Pokémon without fail.</p>
                </div>
            </div>
        </div>
    )
    
}

export default PokeBalls