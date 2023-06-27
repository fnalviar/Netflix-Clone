// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcORjprko9a7U8MEjSTF9gLah8ydPc2QY",
  authDomain: "netflix-clone-87177.firebaseapp.com",
  projectId: "netflix-clone-87177",
  storageBucket: "netflix-clone-87177.appspot.com",
  messagingSenderId: "69438338165",
  appId: "1:69438338165:web:21bf214094ffb23c89743c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }