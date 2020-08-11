import { takeLatest, put, all, call } from "redux-saga/effects"

import UserActionTypes from "./user-types.js"

import { auth, createUserProfileDocument } from "../../firebase/firebase.js"

import {
    signInStart,
    signInSuccess,
    signInFailure,
    signUpStart,
    signUpSuccess,
    signUpFailure,
} from "./user-actions.js"


// sagas 

export function* signIn({ payload: { email, password } }) {
    console.log("hi")
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        yield put(signInFailure(error))
    }
}

// Listeners

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signIn)
}


// Final saga

function* userSagas() {
    yield all([
        call(onSignInStart),
        call(onSignUpStart)
    ])
}

export default userSagas;