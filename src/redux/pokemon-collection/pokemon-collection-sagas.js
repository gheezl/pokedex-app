import { takeLatest, put, all, call } from "redux-saga/effects"

import PokemonCollectionActionTypes from "./pokemon-collection-types.js"

import { signInSuccess } from "../user/user-actions.js"

import { auth, createUserProfileDocument, getCurrentUser, loginToProfile, addPokemonToFirebase, firestore } from "../../firebase/firebase.js"


// sagas

export function* setPokemon({ payload: { user, individualPokemonData } }) {
    console.log(user, individualPokemonData)
    try {
        const userRef = yield addPokemonToFirebase(user, individualPokemonData)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        alert(error.message)
    }
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