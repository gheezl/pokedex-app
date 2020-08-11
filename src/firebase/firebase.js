import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const config = {
    apiKey: "AIzaSyBpifaWtVtXKltb8ImlT4ynh2B5hrvLyd4",
    authDomain: "pokedex-d822d.firebaseapp.com",
    databaseURL: "https://pokedex-d822d.firebaseio.com",
    projectId: "pokedex-d822d",
    storageBucket: "pokedex-d822d.appspot.com",
    messagingSenderId: "288847202499",
    appId: "1:288847202499:web:ed2d309b7e2cb49892fa76",
    measurementId: "G-ZWS44T949C"
}

// this function creates a user or checks if one all ready exists

export const createUserProfileDocument = async (userAuth, displayName) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()


    if (!snapShot.exists) {
        const { email } = userAuth
        const createdAt = new Date()

        try {
            userRef.set({
                email,
                createdAt,
                ...displayName
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return userRef
}

// this is a subscribtion to the auth library to listen for a previously signed in user

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase;