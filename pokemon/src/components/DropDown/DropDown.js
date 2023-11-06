import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import './DropDown.css'
import { Link, useNavigate } from 'react-router-dom'
import { clearUserToken } from '../../utilities/token/auth-token'


const DropDown = () => {
  const token = localStorage.getItem("token");
 


    function handleLogOut(){
        clearUserToken()
        
    }

    

  return (
    <div>
      { token ? (
    <div className="flex flex-col dropdownProfile">
        <ul className="flex flex-col gap-2">
            <li className="hover:bg-[gray] rounded-md"><Link to={'/user/profile'}>Profile</Link></li>
            <li className="hover:bg-[gray] rounded-md px-1" ><button onClick={handleLogOut}>Log Out</button></li>
        </ul>

    </div> ) : (
      <div></div>
    )}
    
    </div>
    
  )
}

export default DropDown