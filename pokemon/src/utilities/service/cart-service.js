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