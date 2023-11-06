import React, {useState, useEffect} from 'react'
import { showCart } from '../../../utilities/service/cart-service'
import Spinner from '../../../components/Spinner/Spinner'

const CartIndex = () => {
    const [ cartData, setCartData ] = useState(null)
    const [loading, setLoading] = useState(true)


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
    <div>
      <div>CartIndex</div>
      {!loading? (
        <div>
          {cartData.pokeBallItems.length || cartData.pokemonItems.length ? (
            <div>
              {cartData.pokeBallItems.map((p) => (
            <div></div>
          ))}
              {cartData.pokemonItems.map((p) => (
            <div className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[66vw] min-w-max mx-auto flex mb-6 text-lg">
              <div>
                <img className="m-4 bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200" src={p.pokemon.front} alt={p.pokemon.pokemonName}/>
              </div>
              <div className="w-full my-auto">
                <p className="mb-5">{p.pokemon.pokemonName[0].toUpperCase() + p.pokemon.pokemonName.slice(1)}</p>
                <p className="">
                  Quantity: <span className="border-[1px] border-[gray] bg-white p-2">{p.quantity}</span>
                </p>
              </div>
              <div className="flex align-center items-center">
                <p className="m-4">${p.pokemon.price}</p>
              </div>
            </div>
          ))}
            </div>) : (<div>No items in cart yet</div>)}
        
        </div>
      ) : (
        <div className="w-max mx-auto mt-[100px]">
        <div className="flex justify-center">
        <Spinner/>
        </div>
        <p className="my-4 text-2xl font-[PKMN]">Loading...</p>
      </div>
      )}
    </div>
    
  )
}

export default CartIndex