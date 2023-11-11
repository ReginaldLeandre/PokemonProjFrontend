import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'
import { clearUserToken } from '../../utilities/token/auth-token'
import { useState } from 'react'
import {BsBoxArrowInRight, BsPersonCircle} from 'react-icons/bs'
import { useDropDown } from '../../data/DropDownContext'

const DropDown = () => {
  const token = localStorage.getItem("token");
  const { openDropDown, handleExtraDropDown } = useDropDown()

    function handleLogOut(){
        clearUserToken()
    }

  return (
    <div>
      { token && (
      <div className="flex flex-col right-0 w-[140px] bg-poke-lightblue absolute">
          <ul className="flex flex-col">
            <Link to={'/user/profile'}>
              <li className="hover:bg-poke-grayblue p-2 pb-4 text-lg hover:cursor-pointer" >
                <button onClick={() => handleExtraDropDown()}>Profile</button>
                <BsPersonCircle className="text-[24px] inline ml-2"/>
              </li>
            </Link>
            <li className="hover:bg-poke-grayblue p-2 pb-4 text-lg hover:cursor-pointer" onClick={handleLogOut}>
              <button onClick={() => handleExtraDropDown()}>Log Out</button>
              <BsBoxArrowInRight className="text-[24px] inline ml-2"/>
            </li>
          </ul>
      </div> )}
    </div>
  )
}

export default DropDown