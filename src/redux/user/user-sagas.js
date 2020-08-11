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
    console.log("this is signed in")
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

export function* signUp({ payload: { displayName, email, password } }) {
    console.log("this is sign up", displayName, email, password)
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user, { displayName })
        const userSnapshot = yield userRef.get()
        yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        yield put(signUpFailure(error))
    }
}

// Listeners

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}


// Final saga

function* userSagas() {
    yield all([
        call(onSignInStart),
        call(onSignUpStart)
    ])
}

export default userSagas;