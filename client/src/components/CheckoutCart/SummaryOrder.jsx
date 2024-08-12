import React from 'react';

const SummaryOrder = ({ totalProductos, totalEnvio, importeTotal }) => {
    return (
        <div>
            <h3>Resumen del Pedido</h3>
            <p><strong>Tengo un cupón / Bono</strong></p>
            <p><strong>Total productos:</strong> € {totalProductos.toFixed(2)}</p>
            <p><strong>Total Envío:</strong> € {totalEnvio.toFixed(2)}</p>
            <p><strong>Importe total:</strong> € {importeTotal.toFixed(2)}</p>
            <p><em>Impuestos incluidos</em></p>
            <button>Ir al proceso de compra</button>
        </div>
    );
};

export default SummaryOrder;
