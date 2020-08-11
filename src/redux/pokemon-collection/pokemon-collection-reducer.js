import PokemonCollectionActionTypes from "./pokemon-collection-types.js"

const INITIAL_STATE = {
    pokemonCollection: null,
}

const pokemonCollectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PokemonCollectionActionTypes.SET_POKEMONSTART:
            return {
                ...state
            }

        // default state

        default:
            return state
    }
}

export default pokemonCollectionReducer;