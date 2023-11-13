import React, { useState, useEffect, useContext } from 'react'
import Spinner from '../../../components/Spinner/Spinner'
import { Link } from 'react-router-dom'
import { useCart } from '../../../data/CartContext'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'

const CartIndex = () => {
  const { cartData, loading, refreshCart, handleDecrease, handleIncrease, handleEmptyCart } = useCart()
  const [ openEmptyCart, setOpenEmptyCart ] = useState(false)

  const handleOpenEmptyCart = async () => {
    setOpenEmptyCart((prev) => !prev)
}

  return (
    <div>
      {!loading ? (
        <div className="w-max mx-auto">
          {cartData.pokeBallItems.length || cartData.pokemonItems.length ? (
            <div className="flex">
              <div className="mx-6 mt-10">
              {cartData.pokeBallItems.map((p, index) => (
                <div key={index}>
                  {/* this will be for our pokeball items */}
                </div>
              ))}
              {cartData.pokemonItems.map((p, index) => (
                <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] md:w-[720px] min-w-max mx-auto flex mb-6 text-lg">
                  <div className="my-auto">
                    <Link to={`/poke/${p.pokemon.pokeDexId}`}>
                    <img className="mx-4 bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200" src={p.pokemon.front} alt={p.pokemon.pokemonName} />
                    </Link>
                  </div>
                  <div className="w-full my-auto">
                    <p className="my-5">{p.pokemon.pokemonName[0].toUpperCase() + p.pokemon.pokemonName.slice(1)}</p>
                    <p className="mb-5">Price: ${p.pokemon.price}</p>
                  </div>
                  <div className="flex my-auto min-w-[90px]">
                    <p className="my-auto mr-2">Qty: </p>
                    <div className="my-auto flex flex-col items-center">
                      <BsCaretUpFill onClick={() => handleIncrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] mb-1"/>
                      <span className="border-[1px] border-[gray] bg-white py-1 px-2">{p.quantity}</span>
                      <BsCaretDownFill onClick={() => handleDecrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] mt-1"/>
                    </div>
                  </div>
                  <div className="flex align-center items-center min-w-[150px]">
                    <p className="mx-auto m-4">${p.calcPrice}</p>
                  </div>
                </div>
              ))}
              </div>
              <div className="w-[372.5px] mt-10">
                <table className="border-[1px] text-lg mx-auto">
                  <tr>
                    <th colSpan="2" className="py-2">Your Cart</th>
                  </tr>
                  <tr>
                    <td className="border-[1px] px-4 py-2">Sub Total</td>
                    <td className="border-[1px] px-4 py-2">${cartData.subTotal}</td>
                  </tr>
                  <tr>
                    <td className="border-[1px] px-4 py-2">Sales Tax</td>
                    <td className="border-[1px] px-4 py-2">${cartData.salesTax}</td>
                  </tr>
                  <tr>
                    <td className="border-[1px] px-4 py-2">Total Price</td>
                    <td className="border-[1px] px-4 py-2">${cartData.totalPrice}</td>
                  </tr>
                </table>
                <div>
                    {/* EMPTY CART */}
                    <button className="bg-red-500 text-white rounded px-2 py-1 font-bold hover:bg-red-400 my-6" onClick={() => handleOpenEmptyCart()}>Empty Cart</button>
                      {openEmptyCart && 
                        <div className="border-[1px] border-poke-darkblue rounded w-max mx-auto p-4 text-lg mb-4 bg-poke-lightblue"> 
                          <p>Are you sure you want to empty your cart? </p>
                          <button className="bg-red-500 my-2 px-6 py-1 rounded text-white hover:bg-red-400 font-bold" onClick={() => handleEmptyCart()}>Yes</button>
                          <br></br>
                          <button className="bg-poke-blue text-white hover:bg-poke-darkblue px-6 py-1 rounded font-bold" onClick={() => handleOpenEmptyCart()}>No</button> 
                        </div>
                      }
                  </div>
              </div>
              
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
