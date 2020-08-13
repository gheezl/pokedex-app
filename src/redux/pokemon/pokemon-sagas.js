import { takeLatest, put, all, call } from "redux-saga/effects"

import PokemonActionTypes from "./pokemon-types.js"

import {
    getPokemonSuccess,
    getPokemonFailure,
    displayCard,
    displayButton,
    getIndividualPokemonSuccess,
    getIndividualPokemonFailure,
    saveIndividualPokemon
} from "./pokemon-actions.js"

// utilities

const checkForExistingPokemon = (user, name) => {
    if (!user) return null;

    let displayRemove = false

    user.pokemon.map(pokemon => {
        if (pokemon.name === name) {
            displayRemove = true
            return;
        }
    })

    return displayRemove
}

// sagas

export function* getPokemon({ payload: url }) {
    try {
        const fetchPokemon = yield fetch(url)
            .then(response => response.json())
        yield put(
            getPokemonSuccess(fetchPokemon),
        )
        yield put(
            displayCard(true)
        )
    }
    catch (error) {
        getPokemonFailure(error.message)
    }
}

export function* getIndividualPokemon({ payload: { url, name, user } }) {
    try {
        const toggleButton = yield checkForExistingPokemon(user, name)
        yield put(
            displayButton(toggleButton)
        )
        const fetchIndividualPokemon = yield fetch(url)
            .then(response => response.json())
        yield put(
            getIndividualPokemonSuccess(fetchIndividualPokemon)
        )
        yield put(
            saveIndividualPokemon({ url, name })
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