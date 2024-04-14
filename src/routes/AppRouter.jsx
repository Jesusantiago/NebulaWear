// @libreria react-router-dom encargada de manejar las rutas de la app
// @documentation https://reactrouter.com/en/main
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import PrivateRouter from "./PrivateRouter";

// @descripcion Puerta de entrada a la Aplicacion, verifica si el usuario debe tener una pantalla publica o privada
// @funcion {AppRouter} Componente encargado de hacer la verificación
// @const { user } verifica si hay un usuaio en el localStorage 

const AppRouter = (props) => {
    
    const user = localStorage.getItem("login")
    console.log("user :" + user)

  return (
    <>
    {(!user) 
        ? <BrowserRouter>
            <Routes>
                <Route path ="/login" element={<LoginForm/>}  />
                <Route path="*" element={<LoginForm/> } replace />
            </Routes>
        </BrowserRouter>
        
        : <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PrivateRouter/>} />
            </Routes>
        </BrowserRouter>
    }
  </>
  )
}

export default AppRouter