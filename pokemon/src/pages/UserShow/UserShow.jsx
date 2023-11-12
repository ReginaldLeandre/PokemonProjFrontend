import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { userShow } from '../../utilities/service/auth-service'

const UserShow = () => {
  const  [ userData, setUserData ] = useState(null)
  const [loading, setLoading] = useState(true)

      useEffect(() => {
        async function handleRequest() {
          try {
            
            const userResponse = await userShow()
            console.log("this is userResponse: ", userResponse)
            if (userResponse) {
              setUserData(userResponse)
              setLoading(false)
            }
          } catch (error) {
            console.error(error)
          }
        }

        if(loading === true) {
          handleRequest()
          console.log("this is userData: ", userData)
        }
      }, [])



  return (
    <div>UserShow</div>
  )
}

export default UserShow