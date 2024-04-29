import { auth } from "../firebase/firebase.config";
import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { apiRegister } from "../components/Service/ServiceApi";

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) console.log("error context")
  return context;
}

export const AuthProvider = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState({})

  const register = async (email, password, name) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, { displayName: name })
      let valueApi;
      if (Object.keys(user).length !== 0) {
        const dataApi = await apiRegister(user)
        valueApi = dataApi
      }
      return {
        value: valueApi,
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      }
    }
    catch (err) {
      return {value : 409}
    }
  }

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response)
  }

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider()
    return signInWithPopup(auth, responseGoogle)
  }

  const logout = async () => {
    const responseOut = await signOut(auth)
    console.log(responseOut)
  }

  return <AuthContext.Provider
    value={{
      register,
      login,
      loginWithGoogle,
      logout
    }}
  >
    {children}
  </AuthContext.Provider>
}