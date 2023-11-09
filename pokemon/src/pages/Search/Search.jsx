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
      <h1>Search your Pokemon</h1>
      <form onSubmit={(e) => { e.preventDefault()
        handleSearch(searchData) }}>
        <input
          type="text"
          placeholder="Search a Pokemon(Must be correct spelling)..."
          value={searchData}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {!loading ? (
         <div>
         <Link to={`/poke/${searchResults.pokeDexId}`}>
                <div className="hover:scale-105 border-[8px] border-poke-yellow rounded-md">
                <img className="border-[8px] border-poke-lightyellow bg-gradient-to-tr from-indigo-700 via-blue-400 to-teal-200"
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
              <div className="w-max m-auto p-1 rounded my-2 text-xl">
              </div>
              </Link>
       </div>
      ) : (
          <div className="w-max mx-auto mt-[100px]">
          <div className="flex justify-center">
          <Spinner/>
          </div>
          <p className="my-4 text-2xl font-[PKMN]">Search a Pokemon...</p>
          </div>
      )}
    </div>
  )
}

export default Search