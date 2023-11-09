import { getUserToken } from "../token/auth-token"

const BASE_URL = process.env.REACT_APP_BASE_URL
const cartURL = `${BASE_URL}/cart`


// router.post('/create', cartController.create)
export async function create() {
    const res = await fetch(`${cartURL}/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getUserToken()}`
        }
        })
        if (res.ok) {
            return res.json()
          } else {
            throw new Error("Invalid POST Request")
          }
        }



// router.get('/index', cartController.view)
export async function show() {
    const res = await fetch(`${cartURL}/index`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${getUserToken()}`
          }
  })
  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}






// router.put('/addPoke', requireToken, cartController.plusle)
export async function addPokeToCart(pokemonName) {
  console.log("this is the api: ",pokemonName)
  const res = await fetch(`${cartURL}/addPoke?pokemonName=${pokemonName}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getUserToken()}`
    }
  })
  if (res.ok) {
    return res.json()
  } else {
    return new Error("Invalid Request")
  }
}



// router.put('removePoke', requireToken, cartController.minun)
export async function remPokeFromCart(pokemonName) {
  console.log("this is the api: ",pokemonName)
  const res = await fetch(`${cartURL}/removePoke?pokemonName=${pokemonName}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getUserToken()}`
    }
  })
  if (res.ok) {
    return res.json()
  } else {
    return new Error("Invalid Request")
  }
}

