import PokemonActionTypes from "./pokemon-types.js"

const INITIAL_STATE = {
    displayCard: false,
    allPokemon: ["place", "holder"],
    next: null,
    previous: null,
    individualPokemon: null,
    individualPokemonData: null,
    displayButton: null,
    error: null
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // get all pokemon

        case PokemonActionTypes.GET_ALL_POKEMON_START:
            return {
                ...state
            }

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

        // display card and button

        case PokemonActionTypes.DISPLAY_CARD:
            return {
                ...state,
                displayCard: action.payload,
            }

        case PokemonActionTypes.DISPLAY_BUTTON:
            return {
                ...state,
                displayButton: action.payload
            }

        // get individual pokemon

        case PokemonActionTypes.GET_INDIVIDUAL_POKEMON_START:
            return {
                ...state,
            }

        case PokemonActionTypes.GET_INDIVIDUAL_POKEMON_SUCCESS:
            return {
                ...state,
                individualPokemon: action.payload,
            }

        case PokemonActionTypes.GET_INDIVIDUAL_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        // saves the individual pokemon name and url

        case PokemonActionTypes.SAVE_INDIVIDUAL_POKEMON:
            return {
                ...state,
                individualPokemonData: action.payload
            }


        // default state

        default:
            return state
    }
}

export default pokemonReducer;