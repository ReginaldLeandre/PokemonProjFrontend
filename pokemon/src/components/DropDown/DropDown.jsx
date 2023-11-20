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
      window.location.reload()
    }

  return (
    <div>
      { token && (
      <div className="hidden md:flex fixed top-[48px] md:top-[50px] right-0 flex-col w-[140px] bg-poke-lightblue">
          <ul className="flex flex-col">
            <Link to={'/user/profile'} onClick={() => handleExtraDropDown()}>
              <li className="hover:bg-poke-grayblue p-2 pb-4 text-lg hover:cursor-pointer" >
                <button >Profile</button>
                <BsPersonCircle className="text-[24px] inline ml-2"/>
              </li>
            </Link>
            <div onClick={() => handleExtraDropDown()}>
              <li className="hover:bg-poke-grayblue p-2 pb-4 text-lg hover:cursor-pointer" onClick={handleLogOut}>
                <button >Log Out</button>
                <BsBoxArrowInRight className="text-[24px] inline ml-2"/>
              </li>
            </div>
          </ul>
      </div> )}
    </div>
  )
}

export default DropDown