import express from 'express';
import routerApi from './router/index';
import sequelize from './config/sequelize';
import cors from "cors"

const PORT = parseInt(process.env.PORT as string, 10) || 3000;

const app = express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

routerApi(app);

app.get('/', (req, res) => {
    res.send({ data: 'Hello World' });
});

app.listen(PORT, async () => {
    console.log(`Server is running on port https://localhost:${PORT}`);
    try {
        await sequelize.sync(
            //NODE_ENV === 'production' ? { alter: true } : { force: true },
            { alter: true },
        )
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
});