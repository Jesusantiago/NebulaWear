import express, { Request, Response } from 'express';
import { faker } from '@faker-js/faker/locale/es_MX';

const router = express.Router();
console.log(router)

// GET all products
router.get('/', (req: Request, res: Response) => {
    res.send('GET request to the homepage')
});

// GET a specific product
router.get('/:id', (req: Request, res: Response) => {
    const productId: string = req.params.id;

    const product = {
        id: productId,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    };

    res.json(product);
});

// POST a new product
router.post('/', (req: Request, res: Response) => {
    // Your code here
});

// PUT update a product
router.put('/:id', (req: Request, res: Response) => {
    // Your code here
});

// DELETE a product
router.delete('/:id', (req: Request, res: Response) => {
    // Your code here
});

export default router;