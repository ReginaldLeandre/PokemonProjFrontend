import React from 'react'
import { useNavigate } from 'react-router'
import { createCart } from "../../../utilities/service/cart-service"



const CreateCart = () => {
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
          const response = await createCart()
    
          if (response) {
            navigate(`/indexCart`)
          } else {
            console.error("Failed to create a Cart.")
          }
        } catch (error) {
          console.error("Error creating Cart: ", error)
        }
      }

  return (
    <div>
        <button onClick={handleSubmit}>
        Create a Cart
        </button>
    </div>
  )
}

export default CreateCart