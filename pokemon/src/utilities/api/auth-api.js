import { getUserToken } from "../token/auth-token"

const BASE_URL = process.env.REACT_APP_BASE_URL
const authURL = `${BASE_URL}/auth`


export async function registerUser(data) {
  const url = `${authURL}/register`
  const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
  }

  const response = await fetch(url, options)
  if(response.ok){
    return response.json()
  } else {
    throw new Error(response.statusText)
  }
}




export async function loginUser(data) {

  const url = `${authURL}/login`
  const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
  }

  const response = await fetch(url, options)
  if(response.ok){
    return response.json()
  } else {
    throw new Error(response.statusText)
  }

}

// router.get('/userShow', requireToken, authCtrl.show)
export async function show() {

  const url = `${authURL}/userShow`
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getUserToken()}`
    }
  }

  const response = await fetch(url, options)
  if(response.ok){
    return response.json()
  } else {
    throw new Error(response.statusText)
  }

}


// router.get('/user/pokemon/:id', requireToken, authCtrl.UpokeShow)
export async function userPokeshow(id) {

  const url = `${authURL}/user/pokemon/${id}`
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getUserToken()}`
    }
  }

  const response = await fetch(url, options)
  if(response.ok){
    return response.json()
  } else {
    throw new Error(response.statusText)
  }

}