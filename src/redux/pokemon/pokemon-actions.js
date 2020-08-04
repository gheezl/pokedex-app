import PokemonActionTypes from "./pokemon-types.js"

export const getPokemonStart = () => ({
    type: PokemonActionTypes.GET_ALL_POKEMON_START
})

export const getPokemonSuccess = (pokemon) => ({
    type: PokemonActionTypes.GET_ALL_POKEMON_SUCCESS,
    payload: pokemon
})

export const getPokemonFailure = (error) => ({
    type: PokemonActionTypes.GET_ALL_POKEMON_FAILURE,
    payload: error
})


export const displayCard = (value) => ({
    type: PokemonActionTypes.DISPLAY_CARD,
    payload: value
})