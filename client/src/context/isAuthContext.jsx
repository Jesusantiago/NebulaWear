import { auth } from "../firebase/firebase.config";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";
import { apiRegister } from "../components/Service/ServiceApi";
import { Alert } from "@mui/material";
import { errorRegister } from "../components/Service/handlerErrors";

// https://es.stackoverflow.com/questions/549655/c%C3%B3mo-verificar-que-el-correo-electr%C3%B3nico-sea-aut%C3%A9ntico-en-firebase
// Documentación para ver tema de verificar correo

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  
  if (!context) console.log("error context")
  return context;
}

export const AuthProvider = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState(null)
  // @const estado si hay o no un usuario logeado

  useEffect(() => {
    // if(auth.currentUser.emailVerified === true){
    //   localStorage.setItem("user", auth.currentUser.uid)
    //   const storedUser = localStorage.getItem("user")
    //   if(storedUser){
    //     setUserCurrent(storedUser)
    //   }
    // }

    console.log(auth.currentUser)
      // if(storedUser){
      //   setUserCurrent(storedUser)
      //   console.log(userCurrent)
      // }else{
      //   console.log("esto no esta bien")
      // }
    }, [userCurrent])
  
  /*
    @funtion { register } registra al usuario en Firebase y en nuestra base de datos
    @funtion createUserWithEmailAndPassword Google
    @funtion apiRegister registrar el usuario en nuestra base de datos

  */

  const register = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      sendEmailVerification(auth.currentUser)
      console.log(auth.currentUser)
      let valueApi;
      if (Object.keys(user).length !== 0) {
        const dataApi = await apiRegister(user)
        console.log(dataApi)
      }
      return {value : 201}
    }
    catch (err) {
      const errorMessage = errorRegister[err.code] || err.message || "El registro ha fallado, por favor intentelo de nuevo"

      return {
        value : 401,
        message: errorMessage,
        error: err
      }
    }
  }

  /*
    @funtion { login } realiza el login con los datos a Firebase, lo guarda en el estado y en el localStorage
    @funtion signInWithEmailAndPassword funcion de Firebase para logear.
  */
  const login = async (email, password) => {
    console.log(userCurrent)
    try{
      const { user } = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", user.uid)
        setUserCurrent({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        })
        console.log(userCurrent)
    }catch (err){
      console.log(err.message)
    }
  }

  /*
    @funtion { loginWithGoogle } funcion que logea al usuario, lo guarda en el estado y lo guarda en el localStorage
    @funtion GoogleAuthProvider() funcion de firebase

  */
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, responseGoogle)
    setUserCurrent({
      uid : user.uid,
      name : user.displayName, 
    })
    localStorage.setItem("user" , user.uid)
  }

  /* 
    @funtion { logout } - funcion que borra el estado, borra el localStorage y cierra sesión con Firebase
  */
  const logout = async () => {

    localStorage.clear()
    setUserCurrent(null)
    const responseOut = await signOut(auth)
  }

  const resetPassword = async (email) => {
    sendPasswordResetEmail(auth, email)
    .then(()=> {
      <Alert severity="success"> El correo se ha enviado</Alert>
    })
    .catch((err) => console.log(err))
  }

  return <AuthContext.Provider
    value={{
      register,
      login,
      loginWithGoogle,
      logout,
      resetPassword,
      userCurrent
    }}
  >
    {children}
  </AuthContext.Provider>
}