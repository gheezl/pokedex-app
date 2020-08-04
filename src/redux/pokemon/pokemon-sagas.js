import { takeLatest, put, all, call } from "redux-saga/effects"

import PokemonActionTypes from "./pokemon-types.js"

import { getPokemonSuccess, getPokemonFailure, displayCard, getIndividualPokemonStart, getIndividualPokemonSuccess, getIndividualPokemonFailure } from "./pokemon-actions.js"

// sagas

export function* getPokemon() {
    try {
        const fetchPokemon = yield fetch("https://pokeapi.co/api/v2/pokemon?limit=54")
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

export function* getIndividualPokemon({ payload: url }) {
    try {
        const fetchIndividualPokemon = yield fetch(url)
            .then(response => response.json())
        yield put(
            getIndividualPokemonSuccess(fetchIndividualPokemon)
        )
    }
    catch (error) {
        getIndividualPokemonFailure(error.message)
    }
}


// Listeners

export function* onGetPokemonStart() {
    yield takeLatest(PokemonActionTypes.GET_ALL_POKEMON_START, getPokemon)
}

export function* onGetIndividualPokemonStart() {
    yield takeLatest(PokemonActionTypes.GET_INDIVIDUAL_POKEMON_START, getIndividualPokemon)
}


// Final saga

function* pokemonSagas() {
    yield all([
        call(onGetPokemonStart),
        call(onGetIndividualPokemonStart)
    ])
}

export default pokemonSagas;