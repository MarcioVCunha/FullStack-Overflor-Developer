/* eslint-disable no-console */
import './setup';
import app from './app';

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Port ${PORT}`));
