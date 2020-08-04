import { takeLatest, put, all, call } from "redux-saga/effects"

import PokemonActionTypes from "./pokemon-types.js"

import { getPokemonSuccess, getPokemonFailure, displayCard } from "./pokemon-actions.js"


export function* getPokemon() {
    try {
        const fetchPokemon = yield fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
            .then(response => response.json())
        yield put(
            getPokemonSuccess(fetchPokemon)
        )
        yield put(
            displayCard(true)
        )
    }
    catch (error) {
        getPokemonFailure(error.message)
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