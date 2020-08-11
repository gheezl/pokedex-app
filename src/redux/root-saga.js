import { all, call } from "redux-saga/effects"

import pokemonSagas from "./pokemon/pokemon-sagas.js"
import userSagas from "./user/user-sagas.js"
import pokemonCollectionSagas from "./pokemon-collection/pokemon-collection-sagas.js"


function* rootSaga() {
    yield all([
        call(pokemonSagas),
        call(userSagas),
        call(pokemonCollectionSagas)
    ])
}

export default rootSaga;