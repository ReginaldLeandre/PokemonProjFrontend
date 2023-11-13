import * as cartApi from '../api/cart-api'




export async function createCart() {
    try {
        const data = await cartApi.create()
        return data
    }
    catch(err) {
        return err
    }
}



export async function showCart() {
    try {
        const data = await cartApi.show() 
        return data
    }
    catch(err) {
        return err
    }
}

export async function plusPokeCart(pokemonName) {
    try {
        console.log("this is the service: ",pokemonName)
        const data = await cartApi.addPokeToCart(pokemonName) 
        return data
    }
    catch(err) {
        return err
    }
}

export async function minusPokeCart(pokemonName) {
    try {
        console.log("this is the service: ",pokemonName)
        const data = await cartApi.remPokeFromCart(pokemonName) 
        return data
    }
    catch(err) {
        return err
    }
}


export async function addPokeShow(pokeDexId){
    try{
        const data = await cartApi.addPokeId(pokeDexId) 
        return data
    }
    catch(err) {
        console.log("(addPokeShow)service file error: ", err)
        return err
    }
}


export async function emptyCart() {
    try {
        const data = await cartApi.emptyCart()
        return data
    }
    catch(err){
        console.log("(emptyCart)service file error: ", err)
        return err
    }
}


export async function addPokeBallCart(ballType) {
    try{
        const data = await cartApi.addPokeBallCart(ballType)
        return data
    }
    catch(err){
        console.log("(addPokeBallCart)service file error: ", err)
        return err
    }
}