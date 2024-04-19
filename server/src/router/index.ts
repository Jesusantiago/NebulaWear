import { Express } from 'express';
import routerProducts from './products.router';
import routerUsers from './users.router';
import routerOrders from './orders.router';
import routerAuth from './auth.router'

function routerApi(app: Express): void {
    app.use('/api/products', routerProducts);
    app.use('/api/users', routerUsers);
    app.use('/api/orders', routerOrders);
    app.use('/api/auth', routerAuth);
}

export default routerApi;