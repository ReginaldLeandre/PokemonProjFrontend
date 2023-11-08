import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'
import { clearUserToken } from '../../utilities/token/auth-token'
import { useState } from 'react'

const DropDown = () => {
  const token = localStorage.getItem("token");
  const [openDropdown, setOpenDropdown] = useState(false)

    function handleLogOut(){
        clearUserToken()
    }

  return (
    <div>
      { token && (
      <div className="flex flex-col right-0 w-[100px] bg-poke-lightblue absolute">
          <ul className="flex flex-col">
              <li className="hover:bg-poke-grayblue p-2 text-lg" onClick={() => setOpenDropdown((prev) => !prev)}><Link to={'/user/profile'}>Profile</Link></li>
              <li className="hover:bg-poke-grayblue p-2 pb-4 text-lg "><button onClick={handleLogOut}>Log Out</button></li>
          </ul>
      </div> )}
    </div>
  )
}

export default DropDown