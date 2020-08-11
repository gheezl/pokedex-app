import { takeLatest, put, all, call } from "redux-saga/effects"

import PokemonCollectionActionTypes from "./pokemon-collection-types.js"


// sagas

export function* setPokemon({ payload: pokemon }) {
    console.log(pokemon)
}



// listeners

export function* onSetPokemonStart() {
    yield takeLatest(PokemonCollectionActionTypes.SET_POKEMON_START, setPokemon)
}


// Final saga

function* pokemonCollectionSagas() {
    yield all([
        call(onSetPokemonStart),
    ])
}

export default pokemonCollectionSagas;