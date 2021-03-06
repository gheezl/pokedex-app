import UserActionTypes from "./user-types.js"

// sign in actions

export const signInStart = (emailAndPassword) => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: emailAndPassword
})

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

// sign up actions

export const signUpStart = (data) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: data
})

export const signUpSuccess = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})

// sign out actions 

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = () => ({
    type: UserActionTypes.SIGN_OUT_FAILURE
})

// checks for existing user

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

// set pokemon collection

export const setPokemonStart = (pokemon) => ({
    type: UserActionTypes.SET_POKEMON_START,
    payload: pokemon
})

export const setPokemonSuccess = (user) => ({
    type: UserActionTypes.SET_POKEMON_SUCCESS,
    payload: user
})

export const setPokemonFailure = (error) => ({
    type: UserActionTypes.SET_POKEMON_FAILURE,
    payload: error
})

// remove pokemon 

export const removePokemonStart = (pokemon) => ({
    type: UserActionTypes.REMOVE_POKEMON_START,
    payload: pokemon
})

export const removePokemonSuccess = (user) => ({
    type: UserActionTypes.REMOVE_POKEMON_SUCCESS,
    payload: user
})

export const removePokemonFailure = (error) => ({
    type: UserActionTypes.REMOVE_POKEMON_FAILURE,
    payload: error
})