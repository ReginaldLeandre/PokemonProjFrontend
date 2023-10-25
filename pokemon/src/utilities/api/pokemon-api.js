const BASE_URL = process.env.REACT_APP_BASE_URL;
const pokeURL = `${BASE_URL}api`

//router.get('/:id', pokemonCtrl.show)
export async function show(id) {
    const res = await fetch(`${pokeURL}/${id}`, {
        method: "GET"
  })

//comment

  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}



