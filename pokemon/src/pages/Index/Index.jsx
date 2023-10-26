import React from 'react'
import RandomPokemon from '../../components/RandomPokemonComponent/RandomPokemon'
import wavingPika from '../../assets/wavingPika-unscreen.gif'
import welcomeMessage from '../../assets/welcome-message.png'



const Index = () => {


  return (
    <div>
      <img className="mx-auto" src={welcomeMessage} alt="Welcome to the Pokemon Black Market!"/>
        <img className="mx-auto" src={wavingPika} alt='Waving Pikachu'/>
        <p className="text-2xl bg-poke-blue text-white p-4 w-[90vw] mx-auto rounded-lg">You have the option to buy Pokémon for
            a hefty price or you can test your luck by buying Poké Balls
            for a fraction of the cost and catch Pokémon in the wild. Below are some featured Pokémon for sale. Gotta buy them all!</p>
        <RandomPokemon />     
    </div>
  )
}

export default Index