import express from 'express';
import routerApi from './router/index';

const PORT = parseInt(process.env.PORT as string, 10) || 3000;

const app = express();
app.use(express.json())

routerApi(app);

app.get('/', (req, res) => {
    res.send({ data: 'Hello World' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port https://localhost:${PORT}`);
});