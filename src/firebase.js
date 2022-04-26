// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDjE893mj6bmqMDdLdGCxPzKuy7D5AJctI",
  authDomain: "company-details-8da7a.firebaseapp.com",
  projectId: "company-details-8da7a",
  storageBucket: "company-details-8da7a.appspot.com",
  messagingSenderId: "596919407145",
  appId: "1:596919407145:web:d1ae963860590bf489c238",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
