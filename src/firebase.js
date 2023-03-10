import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
   apiKey: 'AIzaSyAKM5CI1jCIhJyYeWakQ4eaYm4QQLPJmk0',
   authDomain: 'netflix-clone-e323c.firebaseapp.com',
   projectId: 'netflix-clone-e323c',
   storageBucket: 'netflix-clone-e323c.appspot.com',
   messagingSenderId: '259072030564',
   appId: '1:259072030564:web:79897b1b2ed9fc5f292c71'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }
