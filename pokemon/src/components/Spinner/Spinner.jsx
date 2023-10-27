import React from 'react'
import './Spinner.css'
import spinner from '../../assets/pokeballspinner.png'

const Spinner = () => {
    return (
    <div class="wrapper">
        <div class="pokeball">
            <img src={spinner} alt="pokeball"/>
        </div>
    </div>
    )
}

export default Spinner