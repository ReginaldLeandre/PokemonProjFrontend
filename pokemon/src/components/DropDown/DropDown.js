import React from 'react'
import { FaBars } from 'react-icons/fa'
import './DropDown.css'
import { Link } from 'react-router-dom'


const DropDown = () => {
  return (
    <div className="flex flex-col dropdownProfile">
        <ul className="flex flex-col gap-4">
            <li><Link to={'/user/profile'}>Profile</Link></li>
            <li>Log Out</li>
        </ul>

    </div>
  )
}

export default DropDown