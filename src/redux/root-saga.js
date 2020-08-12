import { all, call } from "redux-saga/effects"

import pokemonSagas from "./pokemon/pokemon-sagas.js"
import userSagas from "./user/user-sagas.js"


function* rootSaga() {
    yield all([
        call(pokemonSagas),
        call(userSagas),
    ])
}

export default rootSaga;