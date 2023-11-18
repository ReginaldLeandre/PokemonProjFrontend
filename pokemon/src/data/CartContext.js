import { createContext, useContext, useState, useEffect } from 'react'
import { showCart, minusPokeCart, plusPokeCart, addPokeShow, emptyCart, addPokeBallCart, purchaseItems, createCart } from '../utilities/service/cart-service'
import { incPokeBall, decPokeBall } from '../utilities/api/cart-api'


const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState(null)
  const [loading, setLoading] = useState(true)

  const refreshCart = async () => {
    try {
      const cartResponse = await showCart()
      console.log("This is cartRes: ", cartResponse)
      if (cartResponse) {
        setCartData(cartResponse)
        setLoading(false)
      }
    } catch (error) {
      console.error("This is the refreshCart error: ", error)
    }
  }
  const handleCreateCart = async () => {
    try {
      await createCart()
      refreshCart()
    }
    catch (error) {
      console.log("This is the cart creation error: ", error)
    }
  }

  const handlePurchase = async () => {
    try {
      await purchaseItems()    
      refreshCart()
    }
      catch (error) {
      console.error("This is the Purchase error: ", error)
    }
  }


  const handleAddToCart = async (pokemonName) => {
    try {
      console.log("this is the handleAddToCart: ",pokemonName)
      await addPokeShow(pokemonName) 
      refreshCart()
    } catch (error) {
      console.error("This is the AddToCart error: ", error)
    }
  }

  const handleEmptyCart = async () => {
    try {
      await emptyCart()
      refreshCart()
    }
    catch(error) {
      console.error("This is the empty cart error: ", error)
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
      console.error("This is the Decrease cart error: ", error)
    }
  }
  
  const handleIncrease = async (pokemonName) => {
    try {
      console.log("this is the handleIncrease: ",pokemonName)
      await plusPokeCart(pokemonName)
      refreshCart()
    } catch (error) {
      console.error("This is the Increase cart error: ", error)
    }
  }

  const handleIncreasePokeBall = async (pokeBall) => {
    try {
      console.log("this is the handleIncrease: ",pokeBall)
      await incPokeBall(pokeBall)
      refreshCart()
    } catch (error) {
      console.error("This is the Increase cart error: ", error)
    }
  }

  const handleDecreasePokeBall = async (pokeBall) => {
    try {
      console.log("this is the handleIncrease: ",pokeBall)
      await decPokeBall(pokeBall)
      refreshCart()
    } catch (error) {
      console.error("This is the Increase cart error: ", error)
    }
  }

  const handleAddPokeBall = async (ballType) => {
    try {
      console.log("this is the pokeball being added: ", ballType)
      const response = await addPokeBallCart(ballType)
      
      if (response.pokeballCartMsg) {
        console.log("Pokeball Cart Message:", response.pokeballCartMsg)
      } else if (response.masterBallError) {
        console.log("Masterball Error:", response.masterBallError)
      }
  
      refreshCart()
      return response
    } catch (error) {
      console.error("Error in handleAddPokeBall:", error)
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
    handleIncrease, refreshCart, handleAddToCart, handleEmptyCart, handleAddPokeBall, handleIncreasePokeBall, handleDecreasePokeBall, handlePurchase, handleCreateCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
