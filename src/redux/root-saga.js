import { all, call } from "redux-saga/effects"

import pokemonSagas from "./pokemon/pokemon-sagas.js"


function* rootSaga() {
    yield all([
        call(pokemonSagas)
    ])
}

export default rootSaga;