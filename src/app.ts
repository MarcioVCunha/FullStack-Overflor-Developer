import cors from 'cors';
import express from 'express';

import postUser from './controller/postUser';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', postUser);

export default app;
