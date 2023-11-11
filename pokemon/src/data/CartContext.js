import { createContext, useContext, useState, useEffect } from 'react'
import { showCart, minusPokeCart, plusPokeCart, addPokeShow } from '../utilities/service/cart-service'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
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
  const handleAddToCart = async (pokemonName) => {
    try {
      console.log("this is the handleAddToCart: ",pokemonName)
      await addPokeShow(pokemonName) 
      refreshCart()
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
      console.log("this is the handleDecrease: ",pokemonName)
      await minusPokeCart(pokemonName) 
      refreshCart()
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleIncrease = async (pokemonName) => {
    try {
      console.log("this is the handleIncrease: ",pokemonName)
      await plusPokeCart(pokemonName)
      refreshCart()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    async function handleRequest() {
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

    if (loading === true) {
      handleRequest()
    }
  }, [loading])

  return (
    <CartContext.Provider value={{ cartData, 
    setCartData, loading, setLoading,
    handleDecrease,
    handleIncrease, refreshCart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
