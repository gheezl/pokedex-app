import { createSelector } from "reselect"

const selectPokemonState = state => state.pokemon

export const selectAllPokemon = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.allPokemon.results
)

export const SelectDisplayCard = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.displayCard
)