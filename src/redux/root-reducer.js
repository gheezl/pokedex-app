import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"

import pokemonReducer from "./pokemon/pokemon-reducer.js";
import userReducer from "./user/user-reducer.js"


// const persistConfig = {
//     key: "root",
//     storage,
//     whiteList: ["cart"]
// }

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    currentUser: userReducer,
})


export default rootReducer;