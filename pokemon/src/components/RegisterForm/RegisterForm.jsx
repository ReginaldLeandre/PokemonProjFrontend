import { useNavigate } from "react-router-dom"
import { useState } from "react"

const RegisterForm = ({ signUp }) => {
  const initialState = { username: "", password: "" }
  const [input, setInput] = useState(initialState)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await signUp(input)
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
    <div className="text-lg w-max mx-auto p-10 bg-poke-lightblue">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-max mx-auto">
        <div className="my-2">
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            name="username"
            value={input.username}
            onChange={handleChange}
            className="border-[1px] border-gray-800 p-1 rounded"
          />
        </div>
        <div className="mt-2 mb-4">
          <label htmlFor="password" className="mr-2">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="border-[1px] border-gray-800 p-1 rounded"
          />
        </div>
        <input className="hover:cursor-pointer hover:bg-poke-darkblue bg-poke-blue py-1 px-8 text-white font-bold rounded-md mt-4 w-[80%] mx-auto" type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}


export default RegisterForm