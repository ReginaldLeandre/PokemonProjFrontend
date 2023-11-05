import { createCart } from "../../../utilities/service/cart-service"
import React from 'react'

const CreateCart = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
          const response = await createCart()
    
          if (response?._id) {
            navigate(`/company/${response._id}`)
          } else {
            console.error("Failed to create company.")
          }
        } catch (error) {
          console.error("Error creating company:", error)
        }
      }

  return (
    <div>CreateCart</div>
  )
}

export default CreateCart