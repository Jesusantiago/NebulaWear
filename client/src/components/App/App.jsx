import Navbar from './Navbar';
import Product  from "../Product/Product";
import { useAuth } from "../../context/isAuthContext";
// import './styles/home.css';
// import './styles/login.css';
// import './styles/passRecovery.css';
// import './styles/product.css';
// - - -

const SearchBox = () => {
  return (
    <div className="searchBox">
      <SearchIcon />
      <input type="text" placeholder="Search product" />
    </div>
  );
}

const Categories = () => {
  return (
    <div className="categories">
      <span className="active">All</span>
      <span>Clothes</span>
      <span>Electronics</span>
      <span>Furniture</span>
      <span>Toys</span>
    </div>
  )
}


function App() {
  const auth = useAuth()

  const logoutComponent = () => {
    auth.logout()
    
  }

  return (
    <>
      <Navbar />
      <main>
        <SearchBox />
        <Categories />
        
        <section className="main">
          <div className="filter">
            <span>Order:</span>
            {/* <select name="select">
              <option value="value1" selected>Most recent</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select> */}
          </div>
        <button type='button' onClick={logoutComponent} > Cerrar sesion</button>


          <div className="productList">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </section>

        
      </main>
    </>
  )
}

export default App
