// @libreria react-router-dom encargada de manejar las rutas de la app
// @documentation https://reactrouter.com/en/main
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "../components/User/LoginForm";
import RouterPublic from "./RouterPublic";
import RouterPrivade  from "./RouterPrivade";
import { useEffect, useState } from "react";
import RecoveryPasswordForm from "../components/User/RecoveryPasswordForm";


// @descripcion Puerta de entrada a la Aplicacion, verifica si el usuario debe tener una pantalla publica o privada
// @funcion {AppRouter} Componente encargado de hacer la verificación
// @const { user } verifica si hay un usuaio en el localStorage 

const AppRouter = () => { 
    const [ user, setUser ] = useState("")
    const localUser = localStorage.getItem("login")

    // @funcion { getRoutesPublic } Se encarga de recorrer el archivo de ruta publicos y hacer un <Route/> por cada ruta declarada. 
    // @parametro { routes } Array de objecto que las rutas
    // const getRoutesPublic = ( routes ) => {
    //     return routes.map((prop) =>{
    //         if(prop.status == "Public"){
    //             return (<Route path={prop.path} element={<prop.component {...prop.componentProps }/> } key={prop.name} />)
    //         } else null;
    //     })
    // };

    // @funcion { getRoutesPrivade } Hace lo mismo que la de arriba, pero con las rutas Privade.
    const getRoutesPrivade = ( routes ) => {
        return routes.map((prop) => {
            if( prop.status == "Privade") return ( < Route path={prop.path} element={prop.component} key={prop.name} />)
            else null;
            }
        )
    }

    console.log("app user: " + localUser)

  return (
    <>
    { !localUser 
        ? <BrowserRouter>
            <Routes>
                {/* { getRoutesPublic(RouterPublic) } */}
                <Route path="/login" element={<LoginForm setUser={setUser} />} />
                <Route path="/forgotpassword" element={<RecoveryPasswordForm />} />
                <Route path="*" element={<Navigate to="/login" replace /> } />
            </Routes>
        </BrowserRouter>
        
        : <BrowserRouter>
            <Routes>
                { getRoutesPrivade(RouterPrivade) }
                <Route path="*" element={<Navigate to={"/store"} replace /> } />
            </Routes>
        </BrowserRouter>
    }
  </>
  )
}

export default AppRouter