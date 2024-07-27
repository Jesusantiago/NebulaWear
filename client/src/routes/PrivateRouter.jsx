// @libreria react-router-dom encargada de manejar las rutas de la app
// @documentation https://reactrouter.com/en/main
import { Routes, Route, Navigate } from "react-router-dom";

import App from "../App";

const PrivateRouter = () => {

  return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App/>} replace/>
        
    </Routes>
  )
}

export default PrivateRouter
