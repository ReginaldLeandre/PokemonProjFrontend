import { useContext, useEffect, useState } from "react"
import { UserContext } from '../../data'

import { setUserToken, clearUserToken } from "../../utilities/token/auth-token"
import { signIn, signUp } from "../../utilities/service/auth-service"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useNavigate } from "react-router"

function Auth() {
  const { setAuth, setUser } = useContext(UserContext)
 
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const token = localStorage.getItem("token")
  const nav = useNavigate()
  const [ navFromAuth, setNavFromAuth ] = useState(false)

  const handleRegisterUser = async (data) => {
    try {
      const parsedUser = await signUp(data)
      if (parsedUser.token) {
        
        setUserToken(parsedUser.token)
        
        setUser(parsedUser.user)
        setNavFromAuth(true)
      } else {
        throw `This is the Handle Sign up Error: ${parsedUser.err}`
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
        setNavFromAuth(true)
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
  }, [navFromAuth])

  return (
    <div>
    { !token && (
    <section className="m-10">
    {showRegisterForm ? (
      <RegisterForm signUp={handleRegisterUser} />
    ) : (
      <LoginForm signIn={handleLoginUser} />
    )}
    <div className="mt-10 mx-auto sm:w-max flex">
        {!showRegisterForm ? 
          (<div className="sm:flex mx-auto">
              <p className="font-[PKMN] sm:mr-2">Don't have an account?</p>
              <button onClick={() => setShowRegisterForm(true)} className="mt-2 sm:mt-0 font-[PKMN] underline text-blue-400 hover:text-poke-blue">Sign Up</button>
            </div>)
        : (<div className="sm:flex mx-auto">
              <p className="font-[PKMN] sm:mr-2">Have an account?</p>
              <button onClick={() => setShowRegisterForm(false)} className="mt-2 sm:mt-0 font-[PKMN] underline text-blue-400 hover:text-poke-blue">Login</button>
          </div>)
        }
      </div>
  </section> ) 
    }
    </div>
  )
}

export default Auth