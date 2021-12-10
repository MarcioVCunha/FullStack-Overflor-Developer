import cors from 'cors';
import express from 'express';
import postUser from './controller/postUser';
import postQuestion from './controller/postQuestion';
import postAnswer from './controller/postAnswer';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', postUser);
app.post('/questions', postQuestion);
app.post('/questions/:id', postAnswer);

export default app;
