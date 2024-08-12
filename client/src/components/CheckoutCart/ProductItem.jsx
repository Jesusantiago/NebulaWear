import React from 'react';

const ProductItem = ({ producto, index, increaseQuantity, decreaseQuantity, handleDelete }) => {
    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '150px', height: '150px' }} />
            <div>
                <h2>{producto.nombre}</h2>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
                <p><strong>Descripción:</strong> {producto.descripcion}</p>
                <p><strong>Color:</strong> {producto.color}</p>
                <p><strong>Referencia:</strong> {producto.referencia}</p>
                <p><strong>Precio:</strong> € {producto.precio}</p>
                <div>
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <span>{producto.quantity}</span>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;