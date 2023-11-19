import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import { UserContext } from "./data"
import { useState, useEffect, useContext } from "react"
import MainRoutes from './components/MainRoutes/MainRoutes'
import Footer from './components/Footer/Footer'

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
      <div className="min-h-[calc(100vh-50px)] m-0">
        <Nav/>
        <MainRoutes/>
      </div>
      <Footer/>
      </UserInfo>
    </div>
  )
}

export default App
