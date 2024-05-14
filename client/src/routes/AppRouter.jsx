// @libreria react-router-dom encargada de manejar las rutas de la app
// @documentation https://reactrouter.com/en/main
import { Routes, Route, Navigate } from "react-router-dom";
import RouterPublic from "./RouterPublic";
import RouterPrivade from "./RouterPrivade";
import { useAuth } from "../context/isAuthContext";

/*
    @description Puerta de entrada a la Aplicacion, verifica si el usuario debe tener una pantalla publica o privada
    @funtion { AppRouter } Componente encargado de hacer la verificación
    @const { userCurrent } Usuario actual de la app. 
    todo: guardar data en localStorage
*/
const AppRouter = () => {
    const { userCurrent } = useAuth()

    /*
        @description Presenta y renderiza las rutas publicas
        @funtion { getRoutesPublic } Se encarga de recorrer el archivo de ruta publicos y hacer un <Route/> por cada ruta declarada. 
        @params { routes } Array de objecto de las rutas publicas
    */
    const getRoutesPublic = (routes) => {
        return routes.map((prop) => {
            if (prop.status == "Public") {
                return (<Route path={prop.path} element={prop.component} key={prop.name} />)
            } else null;
        })
    };

    /*
        @description Presenta y renderiza las rutas privadas
        @funtion { getRoutesPrivade } Hace lo mismo que la de arriba, pero con las rutas Privade.
        @params { routes } Arra de objecto de las rutas privada
    */
    const getRoutesPrivade = (routes) => {
        return routes.map((prop) => {
            if (prop.status == "Privade") return (< Route path={prop.path} element={prop.component} key={prop.name} />)
            else null;
        }
        )
    }

    return (
        <>
            {!userCurrent
                ? <Routes>
                    {getRoutesPublic(RouterPublic)}
                    {console.log("hola")}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
                : <Routes>
                    {getRoutesPrivade(RouterPrivade)}
                    <Route path="*" element={<Navigate to={"/store"} replace />} />
                </Routes>

            }
        </>
    )
}

export default AppRouter