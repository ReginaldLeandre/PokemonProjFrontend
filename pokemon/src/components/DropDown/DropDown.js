import React from 'react'
import { FaBars } from 'react-icons/fa'
import './DropDown.css'
import { Link } from 'react-router-dom'
import { clearUserToken } from '../../utilities/token/auth-token'


const DropDown = () => {
  const token = localStorage.getItem("token");
    
    function handleLogOut(){
        clearUserToken();
    }
  return (
    <div className="flex flex-col dropdownProfile">
        <ul className="flex flex-col gap-2">
            <li className="hover:bg-[gray] rounded-md"><Link to={'/user/profile'}>Profile</Link></li>
            <li className="hover:bg-[gray] rounded-md px-1" onClick={handleLogOut}>Log Out</li>
        </ul>

    </div>
  )
}

export default DropDown