import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import { UserContext } from "./data"
import { useState, useEffect, useContext } from "react"
import MainRoutes from './components/MainRoutes/MainRoutes'

function App() {
  const { Provider: UserInfo } = UserContext
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className="App">
       <UserInfo
        value={{
          user: currentUser,
          setUser: setCurrentUser,
        }}
      >
    <Nav/>
     
    <MainRoutes />
    </UserInfo>
    </div>
  )
}

export default App
