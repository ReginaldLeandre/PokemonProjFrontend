import { Routes, Route } from "react-router-dom"


import Index from "../../pages/Index/Index"
import Show from '../../pages/Show/Show.jsx'
import PokeBalls from '../../pages/PokeBalls/PokeBalls.jsx'

export default function MainRoutes(props) {



    return(
        <main>
            <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/poke/:id' element={<Show />} />
            <Route path='/pokeballs' element={<PokeBalls />}/>
            </Routes>
        </main>
    )
}