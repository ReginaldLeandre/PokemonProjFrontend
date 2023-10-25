import { Routes, Route} from "react-router-dom";


import RandomPokemon from "../RandomPokemonComponent/RandomPokemon";

export default function MainRoutes(props) {



    return(
        <main>
            <Routes>

            <Route path='/pokemon' element={<RandomPokemon />} />
            
            

            </Routes>

        </main>
    )
}