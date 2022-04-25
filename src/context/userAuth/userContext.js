import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../../firebase"
const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("")

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)
