import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useCart } from "../../data/CartContext"

const RegisterForm = ({ signUp }) => {
  const initialState = { username: "", password: "" }
  const [input, setInput] = useState(initialState)
  const navigate = useNavigate()
  const {refreshCart} = useCart()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await signUp(input)
    setInput(initialState)
    refreshCart()
  }

  const token = localStorage.getItem("token")
    useEffect(() => {
      if(token) {
        navigate('/user/profile')
      }
    }, [])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <div className="text-lg max-w-[380px] sm:w-max mx-auto py-8 sm:p-8 bg-poke-lightblue">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
        <div className="my-2 flex flex-col sm:flex-row items-center">
          <label htmlFor="username" className="mr-2">Username: </label>
          <input
            id="username"
            name="username"
            value={input.username}
            onChange={handleChange}
            className="w-[208px] border-[1px] border-gray-800 p-1 rounded"
          />
        </div>
        <div className="mt-2 mb-4 flex flex-col sm:flex-row items-center">
          <label htmlFor="password" className="mr-3">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="w-[208px] border-[1px] border-gray-800 p-1 rounded"
          />
        </div>
        <input className="hover:cursor-pointer hover:bg-poke-darkblue bg-poke-blue py-1 px-8 text-white font-bold rounded-md mt-4 w-[80%] mx-auto" type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}


export default RegisterForm