import { takeLatest, put, all, call, take } from "redux-saga/effects"

import UserActionTypes from "./user-types.js"

import { auth, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.js"

import {
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure,
    signOutSuccess,
    signOutFailure,
} from "./user-actions.js"


// sagas 

export function* signIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        yield alert(error.message)
        yield put(signInFailure(error))
    }
}

export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user, { displayName })
        const userSnapshot = yield userRef.get()
        yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        yield alert(error.message)
        yield put(signUpFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    }
    catch (error) {
        signOutFailure(error)
    }
}

export function* checkUser() {
    try {
        const user = yield getCurrentUser()
        if (!user) {
            console.log("no user")
            return
        };
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        console.log(error)
    }
}

// Listeners

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUser)
}


// Final saga

function* userSagas() {
    yield all([
        call(onSignInStart),
        call(onSignUpStart),
        call(onSignOutStart),
        call(onCheckUserSession)
    ])
}

export default userSagas;