import * as pokeApi from '../api/pokemon-api'



export async function show(id) {

    try {
        const data = await pokeApi.show(id)
        return data
    }
    catch(err) {
        return err
    }
}

export async function getRanPoke() {

    try {
        const data = await pokeApi.getRandomPokemon()
        return data
    }
    catch(err) {
        return err
    }
}


export async function catchPoke(pokemonName, ballType) {

    try {
        const data = await pokeApi.catchPokemon(pokemonName, ballType)
        return data
    }
    catch(err) {
        return err
    }
}

export async function encounterPoke() {

    try {
        const data = await pokeApi.encounterPokemon()
        return data
    }
    catch(err) {
        return err
    }
}


export async function searchPoke(query) {
    try{
        const data = await pokeApi.searchPokemon(query)
        return data
    }
    catch(err) {
        return err
    }
}


