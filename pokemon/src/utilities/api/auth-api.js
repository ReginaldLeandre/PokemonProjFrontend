const BASE_URL = process.env.REACT_APP_AUTH_URL
const authURL = `${BASE_URL}/auth`


export async function registerUser(data) {
  const url = `${authURL}/auth/register`
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