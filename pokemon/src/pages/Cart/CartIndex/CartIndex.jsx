import React, { useState, useEffect, useContext } from 'react'
import Spinner from '../../../components/Spinner/Spinner'
import { Link } from 'react-router-dom'
import { useCart } from '../../../data/CartContext'
import { BsCaretUpFill, BsCaretDownFill, BsXCircleFill } from 'react-icons/bs'
import PokeBall from '../../../assets/pokeballs/pokeball.webp'
import GreatBall from '../../../assets/pokeballs/greatball.webp'
import UltraBall from '../../../assets/pokeballs/ultraball.webp'
import MasterBall from '../../../assets/pokeballs/masterball.webp'

const CartIndex = () => {
  const { cartData, loading, refreshCart, handleDecrease, handleIncrease, handleEmptyCart, handleIncreasePokeBall, handleDecreasePokeBall } = useCart()
  const [ openEmptyCart, setOpenEmptyCart ] = useState(false)
  const [ openCheckout, setOpenCheckout ] = useState(false)

  const handleOpenEmptyCart = async () => {
    setOpenEmptyCart((prev) => !prev)
    setOpenCheckout(false)
}

  const handleOpenCheckout = async () => {
    setOpenCheckout((prev) => !prev)
    setOpenEmptyCart(false)
}

  return (
    <div>
      {!loading ? (
        <div className="w-max mx-auto">
          {cartData.pokeBallItems.length || cartData.pokemonItems.length ? (
            <div className="lg:flex">
              <div className="mt-10">
              {cartData.pokeBallItems.map((p, index) => (
                <div key={index}>
                  {(p.pokeBall.ballType === 'PokeBall') && (
                  //   <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] md:w-[720px] min-w-max mx-auto flex flex-col sm:flex-row mb-6 text-lg">
                  //   <div className="mx-4 min-w-max my-auto">
                  //     <Link to={`/poke/${p.pokemon.pokeDexId}`}>
                  //     <img className="my-4 sm:my-0 mx-auto bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200" src={p.pokemon.front} alt={p.pokemon.pokemonName} />
                  //     </Link>
                  //   </div>
                  //   <div className="sm:mx-4 w-full my-auto">
                  //     <p className="my-5">{p.pokemon.pokemonName[0].toUpperCase() + p.pokemon.pokemonName.slice(1)}</p>
                  //     <p className="mb-5">Price: ${p.pokemon.price}</p>
                  //   </div>
                  //   <div className="mx-auto sm:mx-0 flex my-auto min-w-[90px]">
                  //     <p className="my-auto mr-2">Qty: </p>
                  //     <div className="my-auto flex flex-col items-center">
                  //       <BsCaretUpFill onClick={() => handleIncrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] mb-1"/>
                  //       <span className="border-[gray] bg-white py-1 px-2">{p.quantity}</span>
                  //       <BsCaretDownFill onClick={() => handleDecrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] mt-1"/>
                  //     </div>
                  //   </div>
                  //   <div className="flex align-center items-center min-w-[80px] sm:min-w-[130px]">
                  //     <p className="mx-auto m-4">${p.calcPrice}</p>
                  //   </div>
                  // </div>
                    <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] md:w-[720px] min-w-max mx-auto flex mb-6 text-lg">
                    <div className="mx-4 flex items-center sm:my-auto min-w-[96px] min-h-[96px] bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300">
                      <img className="max-w-[70px] mx-auto" src={PokeBall} alt="Poke Ball" />
                    </div>
                    <div className="w-full my-auto">
                      <p className="my-5">Poké Ball</p>
                      <p className="mb-5">Price: ${p.pokeBall.price}</p>
                    </div>
                    <div className="flex my-auto min-w-[90px] border-l-[1px]">
                      <p className="my-auto mr-2">Qty: </p>
                      <div className="my-auto flex flex-col items-center">
                        <BsCaretUpFill onClick={() => handleIncreasePokeBall(p.pokeBall.ballType)} className="hover:cursor-pointer hover:text-[20px] mb-1"/>
                        <span className="border-[1px] border-[gray] bg-white py-1 px-2">{p.quantity}</span>
                        <BsCaretDownFill onClick={() => handleDecreasePokeBall(p.pokeBall.ballType)} className="hover:cursor-pointer hover:text-[20px] mt-1"/>
                      </div>
                    </div>
                    <div className="flex align-center items-center border-l-[1px] sm:min-w-[130px]">
                      <p className="mx-auto m-4">${p.calcPrice}</p>
                    </div>
                  </div>
                  )}
                  {(p.pokeBall.ballType === 'GreatBall') && (
                    <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] md:w-[720px] min-w-max mx-auto flex mb-6 text-lg">
                    <div className=" mx-4 flex items-center my-auto min-w-[71.4px] min-h-[71.4px] bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300">
                      <img className="max-w-[60px] mx-auto" src={GreatBall} alt="Master Ball" />
                    </div>
                    <div className="w-full my-auto">
                      <p className="my-5">Great Ball</p>
                      <p className="mb-5">Price: ${p.pokeBall.price}</p>
                    </div>
                    <div className="flex my-auto min-w-[90px] border-l-[1px]">
                      <p className="my-auto mr-2">Qty: </p>
                      <div className="my-auto flex flex-col items-center">
                        <BsCaretUpFill onClick={() => handleIncreasePokeBall(p.pokeBall.ballType)} className="hover:cursor-pointer hover:text-[20px] mb-1"/>
                        <span className="border-[1px] border-[gray] bg-white py-1 px-2">{p.quantity}</span>
                        <BsCaretDownFill onClick={() => handleDecreasePokeBall(p.pokeBall.ballType)} className="hover:cursor-pointer hover:text-[20px] mt-1"/>
                      </div>
                    </div>
                    <div className="flex align-center items-center border-l-[1px] sm:min-w-[130px]">
                      <p className="mx-auto m-4">${p.calcPrice}</p>
                    </div>
                  </div>
                  )}
                  {(p.pokeBall.ballType === 'UltraBall') && (
                    <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] md:w-[720px] min-w-max mx-auto flex mb-6 text-lg">
                    <div className=" mx-4 flex items-center my-auto min-w-[71.4px] min-h-[71.4px] bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300">
                      <img className="max-w-[60px] mx-auto" src={UltraBall} alt="Ultra Ball" />
                    </div>
                    <div className="w-full my-auto">
                      <p className="my-5">Ultra Ball</p>
                      <p className="mb-5">Price: ${p.pokeBall.price}</p>
                    </div>
                    <div className="flex my-auto min-w-[90px] border-l-[1px]">
                      <p className="my-auto mr-2">Qty: </p>
                      <div className="my-auto flex flex-col items-center">
                        <BsCaretUpFill onClick={() => handleIncreasePokeBall(p.pokeBall.ballType)} className="hover:cursor-pointer hover:text-[20px] mb-1"/>
                        <span className="border-[1px] border-[gray] bg-white py-1 px-2">{p.quantity}</span>
                        <BsCaretDownFill onClick={() => handleDecreasePokeBall(p.pokeBall.ballType)} className="hover:cursor-pointer hover:text-[20px] mt-1"/>
                      </div>
                    </div>
                    <div className="flex align-center items-center border-l-[1px] sm:min-w-[130px]">
                      <p className="mx-auto m-4">${p.calcPrice}</p>
                    </div>
                  </div>
                  )}
                  {(p.pokeBall.ballType === 'MasterBall') && (
                    <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] md:w-[720px] min-w-max mx-auto flex mb-6 text-lg">
                      <div className=" mx-4 flex items-center my-auto min-w-[71.4px] min-h-[71.4px] bg-gradient-to-tr from-green-700 via-teal-400 to-blue-300">
                        <img className="max-w-[60px] mx-auto" src={MasterBall} alt="Master Ball" />
                      </div>
                      <div className="w-full my-auto">
                        <p className="mt-5">Master Ball</p>
                        <p className="text-poke-blue">(Limit 1 Master Ball per account)</p>
                        <p className="mb-4">Price: ${p.pokeBall.price}</p>
                      </div>
                      <div className="flex my-auto min-w-[90px] border-l-[1px]">
                        <p className="my-auto mr-2">Qty: </p>
                        <div className="flex flex-col items-center">
                          <span className="border-[1px] border-[gray] bg-white py-1 px-2 mt-[18px]">{p.quantity}</span>
                          <BsCaretDownFill onClick={() => handleDecreasePokeBall(p.pokeBall.ballType)} className="hover:cursor-pointer hover:text-[20px] mt-1"/>
                        </div>
                      </div>
                      <div className="flex align-center items-center border-l-[1px] sm:min-w-[130px]">
                        <p className="mx-auto m-4">${p.calcPrice}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {cartData.pokemonItems.map((p, index) => (
                <div key={index} className="border-[8px] border-poke-yellow rounded-md bg-poke-lightyellow w-[240px] lg:w-[680px] min-w-max mx-auto flex flex-col sm:flex-row mb-6 text-lg">
                  <div className="mx-4 min-w-max my-auto">
                    <Link to={`/poke/${p.pokemon.pokeDexId}`}>
                    <img className="my-4 sm:my-0 mx-auto bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200" src={p.pokemon.front} alt={p.pokemon.pokemonName} />
                    </Link>
                  </div>
                  <div className="sm:mx-4 w-full my-auto">
                    <p className="my-5">{p.pokemon.pokemonName[0].toUpperCase() + p.pokemon.pokemonName.slice(1)}</p>
                    <p className="mb-5">Price: ${p.pokemon.price}</p>
                  </div>
                  <div className="mx-auto sm:mx-0 flex my-auto min-w-[90px]">
                    <p className="my-auto mr-2">Qty: </p>
                    <div className="my-auto flex flex-col items-center">
                      <BsCaretUpFill onClick={() => handleIncrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] mb-1"/>
                      <span className="border-[gray] bg-white py-1 px-2">{p.quantity}</span>
                      <BsCaretDownFill onClick={() => handleDecrease(p.pokemon.pokemonName)} className="hover:cursor-pointer hover:text-[20px] mt-1"/>
                    </div>
                  </div>
                  <div className="flex align-center items-center min-w-[80px] sm:min-w-[130px]">
                    <p className="mx-auto m-4">${p.calcPrice}</p>
                  </div>
                </div>
              ))}
              </div>
              <div className="lg:ml-10 mx-auto w-[285px] mt-10">
                <table className="border-[1px] text-lg mx-auto">
                  <tbody>
                    <tr>
                      <th colSpan="2" className="py-2">Your Cart</th>
                    </tr>
                    <tr>
                      <td className="border-[1px] px-4 py-2">Sub Total</td>
                      <td className="border-[1px] px-4 py-2">${cartData.subTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border-[1px] px-4 py-2">Sales Tax</td>
                      <td className="border-[1px] px-4 py-2">${cartData.salesTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border-[1px] px-4 py-2">Total Price</td>
                      <td className="border-[1px] px-4 py-2">${cartData.totalPrice.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                    {/* PURCHASE */}
                    <button className="bg-poke-blue text-white hover:bg-poke-darkblue px-2 py-1 rounded font-bold mt-6" onClick={() => handleOpenCheckout()}>Checkout</button>
                      {openCheckout && 
                        <div className="border-[1px] border-poke-darkblue rounded w-max mx-auto p-4 text-lg mt-6 bg-poke-lightblue"> 
                          <p className="mb-1">Are you ready to purchase? </p>
                          <button className="bg-poke-blue text-white hover:bg-poke-darkblue px-6 py-1 rounded font-bold">Yes</button>
                          <br></br>
                          <button className="bg-red-500 my-2 px-6 py-1 rounded text-white hover:bg-red-400 font-bold" onClick={() => handleOpenCheckout()}>No</button> 
                        </div>
                      }
                </div>
                <div>
                    {/* EMPTY CART */}
                    <button className="bg-red-500 text-white rounded px-2 py-1 font-bold hover:bg-red-400 mt-6" onClick={() => handleOpenEmptyCart()}>Empty Cart</button>
                      {openEmptyCart && 
                        <div className="border-[1px] border-poke-darkblue rounded w-[240px] mx-auto p-4 text-lg mt-6 bg-poke-lightblue"> 
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
            <div className="mt-6 text-xl font-[PKMN] text-slate-500 max-w-[280px] sm:max-w-max">No items in the cart yet. </div>
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
