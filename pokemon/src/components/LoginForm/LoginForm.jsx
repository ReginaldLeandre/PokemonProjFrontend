import { useNavigate } from "react-router-dom"
import { useState } from "react"

const LoginForm = ({ signIn }) => {
  const initialState = { username: "", password: "" }
  const [input, setInput] = useState(initialState)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await signIn(input)

    if (createdUserToken && createdUserToken.token) {
      navigate("/user/profile")
    } else {
      navigate("/*")
    }
    setInput(initialState)
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input className="hover:cursor-pointer bg-poke-blue py-1 px-8 text-white font-bold rounded-md" type="submit" value="Log In"/>
      </form>
    </>
  )
}


export default LoginForm