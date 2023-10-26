import { Routes, Route } from "react-router-dom"


import Index from "../../pages/Index/Index"
import Show from '../../pages/Show/Show.jsx'


export default function MainRoutes(props) {



    return(
        <main>
            <Routes>

            <Route path='/' element={<Index />} />
            <Route path='/poke/:id' element={<Show />} />
            

            </Routes>

        </main>
    )
}