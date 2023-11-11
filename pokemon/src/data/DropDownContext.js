import { createContext, useContext, useState, useEffect } from 'react'

const DropDownContext = createContext()


export const DropDownProvider = ({ children }) => {
    const [ openDropdown, setOpenDropdown ] = useState(false)

    const handleOpenDrowndown = async () => {
        setOpenDropdown((prev) => !prev)
    }

    const handleExtraDropDown = async () => {
        setOpenDropdown(false)
    }

    return (
        <DropDownContext.Provider value={{handleOpenDrowndown, handleExtraDropDown, openDropdown}}>
          {children}
        </DropDownContext.Provider>
      )
}

export const useDropDown = () => {
    return useContext(DropDownContext)
  }
  