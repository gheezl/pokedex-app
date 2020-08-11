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

export const selectNext = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.allPokemon.next
)

export const selectPrevious = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.allPokemon.previous
)

export const selectIndividualPokemonData = createSelector(
    [selectPokemonState],
    (pokemon) => pokemon.individualPokemonUrl
)