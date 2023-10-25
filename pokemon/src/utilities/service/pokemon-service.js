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


export async function catchPoke() {

    try {
        const data = await pokeApi.catchPokemon()
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