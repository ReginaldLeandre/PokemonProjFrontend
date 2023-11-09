const BASE_URL = process.env.REACT_APP_BASE_URL
const pokeURL = `${BASE_URL}/api`

//router.get('/:id', pokemonCtrl.show)
export async function show(id) {
    const res = await fetch(`${pokeURL}/${id}`, {
        method: "GET"
  })
  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}



// router.get('/pokemon', pokemonCtrl.getRan)
export async function getRandomPokemon() {
    const res = await fetch(`${pokeURL}/pokemon`, {
        method: "GET"
  })
  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}



// router.post('/catch', pokemonCtrl.catch)
export async function catchPokemon() {
    const res = await fetch(`${pokeURL}/catch`, {
        method: "GET"
  })

  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}


// router.get('/pokemon/encounter', pokemonCtrl.encounter)
export async function encounterPokemon() {
    const res = await fetch(`${pokeURL}/pokemon/encounter`, {
      method: "GET"
  })

  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}


//router.get('/pokemon/search', pokemonCtrl.search)
export async function searchPokemon(query) {
  const res = await fetch(`${pokeURL}/pokemon/search?pokemonName=${query}`, {
    method: "GET"
  })
  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}