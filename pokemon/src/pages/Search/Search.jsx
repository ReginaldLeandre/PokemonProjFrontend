import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { searchPoke } from '../../utilities/service/pokemon-service'
import Spinner from '../../components/Spinner/Spinner'



const Search = () => {
  const [ searchData, setSearchData ] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [ loading, setLoading ] = useState(true)


  const handleInputChange = (e) => {
    setSearchData(e.target.value)
  }

  const handleSearch = async (query) => {
    try {
      const searchResponse = await searchPoke(query)

      if (searchResponse) {
        console.log("This is the search response: ", searchResponse)
        setSearchResults(searchResponse)
        setLoading(false)
        console.log('This is the search results: ', searchResults)
      }
      
    } catch (error) {
      console.error('Error searching Pokemon: ', error)
  }
}



  return (
    <div className="Search">
      <h1 className="m-6 font-[PKMN] text-xl">Search your Pokemon</h1>
      <form onSubmit={(e) => { e.preventDefault()
        handleSearch(searchData) }}>
        <input
          type="text"
          placeholder="Pokemon must have correct spelling..."
          value={searchData}
          onChange={handleInputChange}
          className="border-[1px] rounded w-[300px] px-2"
        />
        <button type="submit" className="mt-4 sm:mt-0 ml-4 bg-poke-blue text-white px-4 py-1 font-bold rounded hover:bg-poke-darkblue">Search</button>
      </form>
      {!loading ? (

        <div className="w-max mx-auto mt-10">
          {searchResults.pokemonName ? (
            <Link to={`/poke/${searchResults.pokeDexId}`}>
              <div className="hover:scale-105 border-[8px] border-poke-yellow rounded-md">
                <img className="w-[200px] sm:w-[400px] border-[8px] border-poke-lightyellow bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200"
                  src={searchResults.home}
                  alt={searchResults.pokemonName}
                />
                <div className="bg-poke-lightyellow flex justify-around">
                  <div>
                    <h3 className="pt-2">{searchResults.pokemonName.charAt(0).toUpperCase() + searchResults.pokemonName.slice(1)}</h3>
                    <h4 className="pb-2">#{searchResults.pokeDexId}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div>
              <p>Error</p>
            </div>
          )}
      </div>
      ) : (
        <div className="mx-auto mt-[100px]">
          <div className="flex justify-center">
            <Spinner/>
          </div>
          <p className="m-4 text-lg font-[PKMN]">Search for a Pokémon by name or using its National Pokédex number.</p>
          <p className="m-4 text-lg font-[PKMN]">Need a hint? Try <span className="text-blue-400">Pikachu</span> or <span className="text-blue-400">25</span></p>
        </div>
      )}
    </div>
  )
}

export default Search