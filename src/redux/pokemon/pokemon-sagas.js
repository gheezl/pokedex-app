import { takeLatest, put, all, call } from "redux-saga/effects"

import PokemonActionTypes from "./pokemon-types.js"

import { getPokemonSuccess, getPokemonFailure } from "./pokemon-actions.js"


export function* getPokemon() {
    try {
        const fetchPokemon = yield call("https://pokeapi.co/api/v2/pokemon?limit=964")
        const pokemon = fetchPokemon.json()
        yield put(
            getPokemonSuccess(pokemon)
        )
    }
    catch (error) {
        getPokemonFailure(error)
    }
}


// Listeners

export function* onGetPokemonStart() {
    yield takeLatest(PokemonActionTypes.GET_ALL_POKEMON_START, getPokemon)
}


// Final saga

function* pokemonSagas() {
    yield all([
        call(onGetPokemonStart)
    ])
}

export default pokemonSagas;