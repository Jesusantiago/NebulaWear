import React, { useState } from 'react';
import ProductItem from './ProductItem';
import SummaryOrder from './SummaryOrder';
import ProductsBD from './ProductsBD';

const CheckoutCart = () => {
    const [cart, setCart] = useState(ProductsBD);

    const increaseQuantity = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);
    };

    const decreaseQuantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            setCart(newCart);
        }
    };

    const handleDelete = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const totalProductos = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    const totalEnvio = 39.39;
    const importeTotal = totalProductos + totalEnvio;

    return (
        <div>
            {cart.map((producto, index) => (
                <ProductItem
                    key={index}
                    producto={producto}
                    index={index}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    handleDelete={handleDelete}
                />
            ))}
            <SummaryOrder
                totalProductos={totalProductos}
                totalEnvio={totalEnvio}
                importeTotal={importeTotal}
            />
        </div>
    );
};

export default CheckoutCart;