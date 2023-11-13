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
        <div className="sm:flex gap-[50px] w-max mx-auto mt-10">
            <div className="w-[240px] border-[2px]" >
                <img className="p-4" src={pokeball} alt="Poke Ball"/>
                <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                    <p>Poké Ball</p>
                    <p>$5</p>
                </div>
                <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                    <p className="my-auto">Add to Cart</p>
                    <button className="hover:scale-105" onClick={() => handlePokeballMessage("PokeBall")}>
                        <BsCartPlus className="text-[32px]"/>
                    </button>
                </div> 
                <p className="border-t-[2px] p-2 pt-4">A device for catching wild Pokémon. It's thrown like a ball, comfortably encapsulating its target.</p>
            </div>
            <div className="w-[240px] border-[2px]">
                <img className="p-4" src={greatball} alt="Great Ball"/>
                <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                    <p>Great Ball</p>
                    <p>$10</p>
                </div>
                <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                    <p className="my-auto">Add to Cart</p>
                    <button className="hover:scale-105" onClick={() => handlePokeballMessage("GreatBall")}>
                        <BsCartPlus className="text-[32px]"/>
                    </button>
                </div>
                <p className="border-t-[2px] p-2">A type of Poké Ball that has a 50% higher chance to successfully catch a Pokémon than that of a regular Poké Ball.</p>
            </div>
            <div className="w-[240px] border-[2px]" >
                <img className="p-4" src={ultraball} alt="Ultra Ball"/>
                <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                    <p>Ultra Ball</p>
                    <p>$20</p>
                </div>
                <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                    <p className="my-auto">Add to Cart</p>
                    <button className="hover:scale-105" onClick={() => handlePokeballMessage("UltraBall")}>
                        <BsCartPlus className="text-[32px]"/>
                    </button>
                </div>
                <p className="border-t-[2px] p-2">A Poké Ball that has a 2x catch rate modifier, double of that of a standard Poké Ball and 33% more of that of a Great Ball.</p>
            </div>
            <div className="w-[240px] border-[2px]">
                <img className="p-4" src={masterball} alt="Master Ball"/>
                <div className="flex justify-center gap-10 text-xl border-t-[2px] py-2">
                    <p>Master Ball</p>
                    <p>$50</p>
                </div>
                <div className="flex justify-center gap-10 border-t-[2px] py-2 text-lg">
                    <p className="my-auto">Add to Cart</p>
                    <button className="hover:scale-105" onClick={() => handlePokeballMessage("MasterBall")}>
                        <BsCartPlus className="text-[32px]"/>
                    </button>
                </div>
                <p className="border-t-[2px] px-3 pt-8">A type of Poké Ball that is able to catch any type of Pokémon without fail.</p>
            </div>
            <div>
                {pokeballMsg && <p>{pokeballMsg}</p>}
            </div>
        </div>
    )
    
}

export default PokeBalls