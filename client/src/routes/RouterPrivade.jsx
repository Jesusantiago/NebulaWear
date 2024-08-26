import App from "../components/App/App";
import ProductDetails from "../components/Product/ProductDetails";
import ProductList from "../components/Product/ProductList";


// @Array { RouterPublic } Array de objecto donde estaran todas las rutas publicas.

let RouterPrivade = [
    {
        path: "/store",
        name: "Market place",
        element: <App />,
        status: "Privade",
        children: [
            {
                path: "",
                name: "Listas de Productos",
                element: <ProductList />,
                status: "Privade",
            },
            {
                path: "product",
                name: "Producto Nuevo",
                element: <ProductDetails />,
                status: "Privade",
            },
        ]
    },
]

export default RouterPrivade;