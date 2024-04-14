import Navbar from './components/App/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import Product  from "./components/Product/Product";

// import styles
import './styles/home.css';
import './styles/login.css';
import './styles/passRecovery.css';
import './styles/product.css';
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

  return (
    <>
      <Navbar />
      <main>
        <SearchBox />
        <Categories />
        
        <section className="main">
          <div className="filter">
            <span>Order:</span>
            <select name="select">
              <option value="value1" selected>Most recent</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>

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
