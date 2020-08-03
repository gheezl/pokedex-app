import PokemonActionTypes from "./pokemon-types.js"

const INITIAL_STATE = {
    allPokemon: [1, 2, 3],
    individualPokemon: null,
    error: null
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PokemonActionTypes.GET_ALL_POKEMON_SUCCESS:
            return {
                ...state,
                allPokemon: action.payload
            }

        case PokemonActionTypes.GET_ALL_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default pokemonReducer;