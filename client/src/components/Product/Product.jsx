import { Button } from "@mui/material";
import imgProduct from "../../assets/imgs/image.png";
import { Link } from "react-router-dom";


const Product = () => {

    return (
        <div className="productItem" >
            <img src={imgProduct} alt="Product 1" />
            <div className="productItemDetails">
                <div className="productItemPrice">
                    <span className="price">$ 120,00</span>
                    <span className="title">Round shelf</span>
                </div>
                <Button
                    component={Link}
                    to='/store/product'
                    color="background"
                    variant="outlined"
                >
                   Ver producto
                </Button>
            </div>
        </div>
    )
}

export default Product;