import Navbar from './Navbar';
import Product  from "../Product/Product";
import { useAuth } from "../../context/isAuthContext";



function App() {
  const auth = useAuth()

  const logoutComponent = () => {
    auth.logout()
    
  }

  return (
    <>
      <Navbar />
      <main>        
        <section className="main">


          <div className="productList">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </section>

        
        <button type='button' onClick={logoutComponent} > Cerrar sesion</button>
      </main>
    </>
  )
}

export default App
