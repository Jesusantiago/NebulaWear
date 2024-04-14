import Navbar from './components/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import LoginForm from './components/LoginForm';
import RecoveryPasswordForm from './components/RecoveryPasswordForm';

// import images
import imgProduct2 from './assets/imgs/secondProd.png';

// import styles
import imgProduct from './assets/imgs/image.png';
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

const Product = () => {
  return (
    <div className="productItem">
      <img src={imgProduct
      } alt="Product 1" />
      <div className="productItemDetails">
        <div className="productItemPrice">
          <span className="price">$ 120,00</span>
          <span className="title">Round shelf</span>
        </div>
        <button className="addToCart">º
          <AddShoppingCartIcon />
        </button>
      </div>
    </div>
  )
}

const ProductDetails = () => {
  return (
    <section>
      <article className="product">
        <img src={imgProduct2} alt="Product image" />
        <div className="productInfo">
          <span>$ 120,00</span>
          <h1>Retro refrigerator</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tempore alias quaerat ad iure cum provident distinctio omnis eius maxime.</p>
        </div>
        <button className="">Add to cart</button>
      </article>
    </section>
  );
}

function App() {

  return (
    <>
      <Navbar />
      <main>
        <SearchBox />

        <Categories />

        {/* <ProductDetails /> */}

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

        <LoginForm />

        <RecoveryPasswordForm />

      </main>
    </>
  )
}

export default App
