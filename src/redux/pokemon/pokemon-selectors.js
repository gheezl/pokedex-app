import { createSelector } from "reselect"

const selectPokemonState = state => state.pokemon

export const selectAllPokemon = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.allPokemon.results
)

export const selectDisplayCard = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.displayCard
)

export const selectIndividualPokemon = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.individualPokemon
)