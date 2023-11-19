import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { userShow } from '../../utilities/service/auth-service'
import Spinner from '../../components/Spinner/Spinner'
import PokeBallPic from '../../assets/pokeballs/pokeball.webp'
import GreatBallPic from '../../assets/pokeballs/greatball.webp'
import UltraBallPic from '../../assets/pokeballs/ultraball.webp'
import MasterBallPic from '../../assets/pokeballs/masterball.webp'

const UserShow = () => {
  const  [ userData, setUserData ] = useState(null)
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")

      useEffect(() => {
        async function handleRequest() {
          try {
            
            const userResponse = await userShow()
            console.log("this is userResponse: ", userResponse)
            if (userResponse) {
              setUserData(userResponse)
              setLoading(false)
            }
          } catch (error) {
            console.error(error)
          }
        }

        if(loading === true) {
          handleRequest()
          console.log("this is userData: ", userData)
        }
      }, [])



  return (
    <>
    { token ? (<div>
    {!loading ? (
    <div>
      <p className="text-3xl py-2 bg-poke-grayblue">{userData.user.username}</p>
      <div className="lg:flex w-max mx-auto mt-2">
        {/* THIS DIV CONTAINS THE TWO GRIDS FOR USER POKEMON AND USER POKEBALLS */}
        <div className="mx-auto w-max max-w-[208px] sm:max-w-[348px] md:max-w-[489px] lg:max-w-[630px]">
          <p className="text-2xl my-4">Your Pokémon</p>
          {userData.allUserPokemon.length ? (
          <div className="m-6">
          {/* THIS IS THE POKEMON GRID */}
            <div className="flex flex-wrap border-[1px] border-black p-2">
              {userData.allUserPokemon.map((pokemon) => (
                <Link to={`/user/pokemon/${pokemon.pokeDexId}`} key={pokemon._id}>
                <div className="border-[1px] m-2 w-[125px] hover:bg-slate-200">
                  <p>{pokemon.pokemonName.charAt(0).toUpperCase() + pokemon.pokemonName.slice(1)}</p>
                  <p>#{pokemon.pokeDexId}</p>
                  <img className="mx-auto" src={pokemon.front} alt={pokemon.pokemonName}/>
                </div>
                </Link>
              ))}
            </div>
          </div>
          
          ) : (
            <div className="font-[PKMN] border-[1px] border-black px-4 py-2 m-6">
              <p>You don't own any Pokémon yet. </p>
              <p>
                Visit 
                <Link to="/encounter" className="text-blue-400 hover:text-poke-blue"> Encounter</Link>
                to catch a Pokémon. 
              </p>
              <p>
                Visit 
                <Link to="/search" className="text-blue-400 hover:text-poke-blue"> Find Pokémon</Link>
                to search a Pokémon.
              </p>
            </div>
          )}
        </div>
        
        <div className="mx-auto w-max max-w-[208px] sm:max-w-[348px] md:max-w-[489px] lg:max-w-[630px]">
          <p className="text-2xl my-4">Your Poké Balls</p>
          {userData.allUserPokeBall.length ? (
          <div className="m-6 flex flex-wrap border-[1px] border-black p-2">
            {/* THIS IS THE POKEBALLS GRID */}
            {userData.allUserPokeBall.map((pokeball) => (
              <div className="m-2 border-[1px] w-[125px]">
              {(pokeball.ballType === 'PokeBall') && (
                <div className="w-max mx-auto" key={pokeball._id}>
                  <p>{pokeball.ballType}</p>
                  <img className="mx-auto w-[50px] py-6" src={PokeBallPic} alt={pokeball.ballType}/>
                  <p>Qty: {pokeball.quantity}</p>
                </div>
              )}
              {(pokeball.ballType === 'GreatBall') && (
                <div className="w-max mx-auto" key={pokeball._id}>
                <p>{pokeball.ballType}</p>
                <img className="mx-auto w-[50px] py-6" src={GreatBallPic} alt={pokeball.ballType}/>
                <p>Qty: {pokeball.quantity}</p>
                </div>
              )}
              {(pokeball.ballType === 'UltraBall') && (
                <div className="w-max mx-auto" key={pokeball._id}>
                <p>{pokeball.ballType}</p>
                <img className="mx-auto w-[50px] py-6" src={UltraBallPic} alt={pokeball.ballType}/>
                <p>Qty: {pokeball.quantity}</p>
                </div>
              )}
              {(pokeball.ballType === 'MasterBall') && (
                <div className="w-max mx-auto" key={pokeball._id}>
                <p>{pokeball.ballType}</p>
                <img className="mx-auto w-[50px] py-6" src={MasterBallPic} alt={pokeball.ballType}/>
                <p>Qty: {pokeball.quantity}</p>
                </div>
              )}
              </div>
            ))}
          </div>
          ) : (
            <div className="font-[PKMN] border-[1px] border-black px-4 py-2 m-6">
              <p>You don't own any Poké Balls yet.</p> 
              <p>
                Visit
                <Link to="/pokeballs" className="text-blue-400 hover:text-poke-blue"> Poké Balls </Link>
                to buy them. 
              </p>
            </div>
          )}
        </div>
      </div>
    </div>

    ) : (
      <div className="w-max mx-auto mt-[100px]">
        <div className="flex justify-center">
        <Spinner/>
        </div>
        <p className="my-4 text-2xl font-[PKMN]">Loading...</p>
      </div>
    )
    }
    </div>
    ) : (
      <div>
          <p className='font-[PKMN] text-xl m-6'>
            You are not signed in. Please <Link to={'/auth'} className="text-blue-400 hover:text-poke-blue">Sign In</Link> to view this page.
            </p>
      </div>
    )}
    </>
    
  )
}

export default UserShow