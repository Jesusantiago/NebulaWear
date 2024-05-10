import { Express } from 'express';
import routerProducts from './product.router';
import routerUsers from './users.router';
import routerOrders from './orders.router';
import routerAuth from './auth.router';
import routerCats from './category.router';
import routerReviews from './review.router';

function routerApi(app: Express): void {
    app.use('/api/products', routerProducts);
    app.use('/api/users', routerUsers);
    app.use('/api/orders', routerOrders);
    app.use('/api/auth', routerAuth);
    app.use('/api/categories', routerCats);
    app.use('/api/reviews', routerReviews);
};

export default routerApi;