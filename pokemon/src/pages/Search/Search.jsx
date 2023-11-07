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

      console.log("This is the search response: ", searchResponse)

      if (searchResponse.ok) {
        setSearchResults(searchResponse)
        setLoading(false)
        console.log('This is the search results: ', searchResults)
      }
      
    } catch (error) {
      console.error('Error searching characters: ', error)
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
      {loading ? (
        <div className="w-max mx-auto mt-[100px]">
        <div className="flex justify-center">
        <Spinner/>
        </div>
        <p className="my-4 text-2xl font-[PKMN]">Search a Pokemon...</p>
      </div>
      ) : (
        <div>
          <Link to={`/poke/${searchResults.pokeDexId}`}>
            {searchResults.home}
            {searchResults.pokemonName}
          </Link>
        </div>
      )}
    </div>
  )
}

export default Search