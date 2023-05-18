import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAd7hNPLgIfSaokS19ymJFNxWRgtqhHoiA",
    authDomain: "chainguardian-site.firebaseapp.com",
    projectId: "chainguardian-site",
    storageBucket: "chainguardian-site.appspot.com",
    messagingSenderId: "1063795016822",
    appId: "1:1063795016822:web:dee75f82ef8919098e0b57"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const firestoreDB = firebase.firestore()
const firebaseAuth = firebase.auth()

export { firestoreDB, firebaseAuth }