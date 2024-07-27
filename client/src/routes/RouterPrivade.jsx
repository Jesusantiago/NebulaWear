import App from "../components/App/App.jsx";
import ProductDetails  from "../components/Product/ProductDetails.jsx";
import ChangeData from "../components/User/ChangeData.jsx";
import MyAccount from "../components/User/MyAccount.jsx";

// @Array { RouterPublic } Array de objecto donde estaran todas las rutas publicas.

let RouterPrivade = [
    {
        path: "/store",
        name: "Market place",
        component: <App />,
        status: "Privade",
    },
    {
        path: "/myAccount",
        name: "Cuenta",
        component: <MyAccount />,
        status: "Privade",
    },{
        path: "/changeData",
        name: "Cambiar datos",
        component: <ChangeData />,
        status: "Privade",
    },
    {
        path: "/product/1",
        name: "Producto Nuevo",
        component: <ProductDetails />,
        status: "Privade",
    },
    
]

export default RouterPrivade;