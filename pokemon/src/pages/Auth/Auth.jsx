import { useContext, useState } from "react"
import { UserContext } from '../../data'

import { setUserToken, clearUserToken } from "../../utilities/token/auth-token"
import { signIn, signUp } from "../../utilities/service/auth-service"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import LoginForm from "../../components/LoginForm/LoginForm"

function Auth() {
  const { setAuth, setUser } = useContext(UserContext)
  // console.log(setAuth, setUser)
  const [showRegisterForm, setShowRegisterForm] = useState(false)

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

  return (
    // <section className="container">
    //   <RegisterForm signUp={handleRegisterUser} />
    //   <LoginForm signIn={handleLoginUser} />
    // </section>
    <section className="container">
    <div>
      <button onClick={() => setShowRegisterForm(true)}>Sign Up</button>
      <button onClick={() => setShowRegisterForm(false)}>Login</button>
    </div>
    {showRegisterForm ? (
      <RegisterForm signUp={handleRegisterUser} />
    ) : (
      <LoginForm signIn={handleLoginUser} />
    )}
  </section>
  )
}

export default Auth