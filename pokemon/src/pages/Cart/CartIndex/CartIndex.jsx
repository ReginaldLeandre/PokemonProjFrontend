import React, { useState, useEffect, useContext } from 'react'
import Spinner from '../../../components/Spinner/Spinner'
import { Link } from 'react-router-dom'
import { useCart } from '../../../data/CartContext'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'

const CartIndex = () => {
  const { cartData, loading, refreshCart, handleDecrease, handleIncrease } = useCart()


  

  return (
    <div>
      {!loading ? (
        <div className="mt-6">
          {cartData.pokeBallItems.length || cartData.pokemonItems.length ? (
            <div>
              <table className="mx-auto table-auto border-[1px] text-lg">
                <tr>
                  <th colSpan="2" className="py-2">Your Cart</th>
                </tr>
                <tr>
                  <td className="border-[1px] py-2 px-4">Sub Total</td>
                  <td className="border-[1px]  py-2 px-4">${cartData.subTotal}</td>
                </tr>
                <tr>
                  <td className="border-[1px] py-2 px-4">Sales Tax</td>
                  <td className="border-[1px] py-2 px-4">${cartData.salesTax}</td>
                </tr>
                <tr>
                  <td className="border-[1px] py-2 px-4">Total Price</td>
                  <td className="border-[1px] py-2 px-4">${cartData.totalPrice}</td>
                </tr>
              </table>
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
                    <p className="mt-2 mb-5">{p.pokemon.pokemonName[0].toUpperCase() + p.pokemon.pokemonName.slice(1)}</p>
                    <p className="mb-5">Price: ${p.pokemon.price}</p>
                    
                  </div>
                  <div className="flex my-auto">
                      <p className="my-auto mr-2">Qty: </p>
                    <div className="my-auto">
                      <BsCaretUpFill onClick={() => handleIncrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] ml-2 mb-1"/>
                      <span className="border-[1px] border-[gray] bg-white p-1">{p.quantity}</span>
                      <BsCaretDownFill onClick={() => handleDecrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] ml-2 mt-1"/>
                    </div>
                  </div>
                  <div className="flex align-center items-center">
                    <p className="m-4">${p.calcPrice}</p>
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
