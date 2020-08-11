import PokemonCollectionActionTypes from "./pokemon-collection-types.js"


export const setPokemonStart = (pokemon) => ({
    type: PokemonCollectionActionTypes.SET_POKEMON_START,
    payload: pokemon
})