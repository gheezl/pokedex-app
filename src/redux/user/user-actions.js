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