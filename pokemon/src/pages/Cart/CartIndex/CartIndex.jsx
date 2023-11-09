import React, { useState, useEffect } from 'react'
import { showCart, minusPokeCart, plusPokeCart } from '../../../utilities/service/cart-service'
import Spinner from '../../../components/Spinner/Spinner'

const CartIndex = () => {
  const [cartData, setCartData] = useState(null)
  const [loading, setLoading] = useState(true)

  const refreshCart = async () => {
    try {
      const cartResponse = await showCart()
      if (cartResponse) {
        setCartData(cartResponse)
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (loading) {
      refreshCart()
    }
  }, [loading])

  const handleDecrease = async (pokemonName) => {
    try {
      await minusPokeCart({ pokemonName })
      refreshCart()
    } catch (error) {
      console.error(error)
    }
  }

  const handleIncrease = async (pokemonName) => {
    try {
      await plusPokeCart({ pokemonName })
      refreshCart()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {!loading ? (
        <div className="mt-6">
          {cartData.pokeBallItems.length || cartData.pokemonItems.length ? (
            <div>
              <div>
                <div>
                  <h1>Your Cart</h1>
                </div>
                <p>Total Price: {cartData.totalPrice}</p>
              </div>
              {cartData.pokeBallItems.map((p, index) => (
                <div key={index}>
                  {/* this will be for our pokeball items */}
                </div>
              ))}
              {cartData.pokemonItems.map((p, index) => (
                <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] md:w-[720px] min-w-max mx-auto flex mb-6 text-lg">
                  <div>
                    <img className="m-4 bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200" src={p.pokemon.front} alt={p.pokemon.pokemonName} />
                  </div>
                  <div className="w-full my-auto">
                    <p className="mb-5">{p.pokemon.pokemonName[0].toUpperCase() + p.pokemon.pokemonName.slice(1)}</p>
                    <p className="">
                      Quantity: <span className="border-[1px] border-[gray] bg-white p-2">{p.quantity}</span>
                    </p>
                  </div>
                  <div className="flex align-center items-center">
                    <p className="m-4">${p.pokemon.price}</p>
                    <button onClick={() => handleDecrease(p.pokemon.pokemonName)}>Decrease</button>
                    <button onClick={() => handleIncrease(p.pokemon.pokemonName)}>Increase</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No items in the cart yet</div>
          )}
        </div>
      ) : (
        <div className="w-max mx-auto mt-[100px]">
          <div className="flex justify-center">
            <Spinner />
          </div>
          <p className="my-4 text-2xl font-[PKMN]">Loading...</p>
        </div>
      )}
    </div>
  )
}

export default CartIndex
