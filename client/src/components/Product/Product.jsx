import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import imgProduct from "../../assets/imgs/image.png";

const Product = () => {

    return (
        <a href='/product/1' className="productItem" >
            <img src={imgProduct} alt="Product 1" />
            <div className="productItemDetails">
                <div className="productItemPrice">
                    <span className="price">$ 120,00</span>
                    <span className="title">Round shelf</span>
                </div>
                <button className="addToCart">
                    <AddShoppingCartIcon />
                </button>
            </div>
        </a>
    )
}

export default Product;