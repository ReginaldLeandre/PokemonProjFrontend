import { useContext, useEffect, useState } from "react"
import { UserContext } from '../../data'

import { setUserToken, clearUserToken } from "../../utilities/token/auth-token"
import { signIn, signUp } from "../../utilities/service/auth-service"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useNavigate } from "react-router"

function Auth() {
  const { setAuth, setUser } = useContext(UserContext)
  // console.log(setAuth, setUser)
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const token = localStorage.getItem("token")
  const nav = useNavigate()


  const handleRegisterUser = async (data) => {
    try {
      const parsedUser = await signUp(data)
      if (parsedUser.token) {
        // sets local storage
        setUserToken(parsedUser.token)
        // put the returned user object in state
        setUser(parsedUser.user)
        // adds a boolean cast of the responses isAuthenticated prop
      } else {
        throw `This is the Handle Sign Error: ${parsedUser.err}`
      }
    } catch (err) {
      console.log(err)
      clearUserToken()
      return null
    }
  }

  const handleLoginUser = async (data) => {
    try {
      const parsedUser = await signIn(data)
      if (parsedUser.token) {
        setUserToken(parsedUser.token)
        setUser(parsedUser.user)
      } else {
        throw `This is the Handle Login Error: ${parsedUser.err}`
      }
    } catch (err) {
      console.log(err)
      clearUserToken()
      return null
    }
  }

  useEffect(() => {
    if(token){
      nav('/user/profile')
    }
  }, [])

  return (
    <div>
    { !token && (
    <section className="m-10">
    {showRegisterForm ? (
      <RegisterForm signUp={handleRegisterUser} />
    ) : (
      <LoginForm signIn={handleLoginUser} />
    )}
    <div className="mt-10 mx-auto w-max flex">
        {!showRegisterForm ? 
          (<div className="flex">
              <p className="font-[PKMN] mr-2">Don't have an account?</p>
              <button onClick={() => setShowRegisterForm(true)} className="font-[PKMN] underline hover:text-poke-blue">Sign Up</button>
            </div>)
        : (<div className="flex">
              <p className="font-[PKMN] mr-2">Have an account?</p>
              <button onClick={() => setShowRegisterForm(false)} className="font-[PKMN] underline hover:text-poke-blue">Login</button>
          </div>)
        }
      </div>
  </section> ) 
    }
    </div>
  )
}

export default Auth