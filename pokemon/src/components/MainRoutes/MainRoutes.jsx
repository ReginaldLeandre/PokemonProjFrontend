import { Routes, Route } from "react-router-dom"


import Index from "../../pages/Index/Index"
import Show from '../../pages/Show/Show.jsx'
import PokeBalls from '../../pages/PokeBalls/PokeBalls.jsx'
import Auth from "../../pages/Auth/Auth"
import UserShow from "../../pages/UserShow/UserShow"
import Encounter from "../../pages/Encounter/Encounter"
import Search from '../../pages/Search/Search'
import Error404 from '../../pages/Error/Index'
import CartIndex from '../../pages/Cart/CartIndex/CartIndex'
import UserPokemonShow from "../../pages/Show/UserPokemonShow/UserPokemonShow.jsx"



export default function MainRoutes(props) {



    return(
        <main>
            <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/poke/:id' element={<Show />} />
            <Route path='/pokeballs' element={<PokeBalls />}/>
            <Route path='/user/profile' element={<UserShow />}/>
            <Route path='/user/pokemon/:id' element={<UserPokemonShow />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/encounter' element={<Encounter />}/>
            <Route path='/indexCart' element={<CartIndex />}/>
            <Route path='/*' element={<Error404 />} />
            </Routes>

        </main>
    )
}