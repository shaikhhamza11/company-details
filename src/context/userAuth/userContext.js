import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../../firebase"
const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("")

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logOut = () => signOut(auth)

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        signUp,
        logIn,
        user,
        signOut,
        logOut,
        googleSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
