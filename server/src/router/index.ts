import { Express } from 'express';
import routerProducts from './products.router';
import routerUsers from './users.router';
import routerOrders from './orders.router';

function routerApi(app: Express): void {
    app.use('/api/products', routerProducts);
    app.use('/api/users', routerUsers);
    app.use('/api/orders', routerOrders);
}

export default routerApi;