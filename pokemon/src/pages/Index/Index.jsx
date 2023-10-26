import React from 'react'
import RandomPokemon from '../../components/RandomPokemonComponent/RandomPokemon'
import wavingPika from '../../assets/wavingPika-unscreen.gif'



const Index = () => {


  return (
    <div>
        <img src={wavingPika} alt='Waving Pikachu'/>
        <h1>Welcome to the Pokémon Black Market!</h1> 
        <p>You have the option to buy Pokémon for
            a hefty price or you can test your luck by buying Poké Balls
            for a fraction of the cost and catch Pokémon in the wild</p>

        <RandomPokemon />     
    </div>
  )
}

export default Index