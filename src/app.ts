import cors from 'cors';
import express from 'express';
import postUser from './controller/postUser';
import postQuestion from './controller/postQuestion';
import postAnswer from './controller/postAnswer';
import getQuestionById from './controller/getQuestion';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', postUser);
app.post('/questions', postQuestion);
app.post('/questions/:id', postAnswer);

app.get('/questions/:id', getQuestionById);

export default app;
