import React, {useState, useEffect} from 'react'
import { showCart } from '../../../utilities/service/cart-service'

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
    <div>CartIndex</div>
  )
}

export default CartIndex