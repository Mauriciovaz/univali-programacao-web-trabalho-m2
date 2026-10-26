import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Servidor executando na porta ${PORT}`);
});