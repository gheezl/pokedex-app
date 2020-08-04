import PokemonActionTypes from "./pokemon-types.js"

// get all pokemon actions

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

// display card action

export const displayCard = (value) => ({
    type: PokemonActionTypes.DISPLAY_CARD,
    payload: value
})

// get individual pokemon actions

export const getIndividualPokemonStart = (url) => ({
    type: PokemonActionTypes.GET_INDIVIDUAL_POKEMON_START,
    payload: url
})

export const getIndividualPokemonSuccess = (individualPokemon) => ({
    type: PokemonActionTypes.GET_INDIVIDUAL_POKEMON_SUCCESS,
    payload: individualPokemon
})

export const getIndividualPokemonFailure = (error) => ({
    type: PokemonActionTypes.GET_INDIVIDUAL_POKEMON_FAILURE,
    payload: error
})