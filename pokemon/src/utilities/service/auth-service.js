import * as AuthAPI from '../api/auth-api'

export async function signUp(data)  {
  try {
    const apiRegResp = await AuthAPI.registerUser(data)
    console.log(apiRegResp)
    return apiRegResp
  }catch(err){
    throw err
  }
}


export async function signIn(data) {
  try {
    const apiLoginResp = await AuthAPI.loginUser(data)
    console.log(apiLoginResp)
    return apiLoginResp
  }catch(err){
    throw err
  }
}


export async function userShow() {
  try {
    const data = await AuthAPI.show()
    return data
  }catch(err){
    console.log("This is the user's show page error: ", err)
    throw err
  }
}


export async function userPokeshow(id) {
  try{
    const data = await AuthAPI.userPokeshow(id)
    return data
  }
  catch(err) {
    console.log("This is the user's pokemon show page error: ", err)
    throw err
  }
}