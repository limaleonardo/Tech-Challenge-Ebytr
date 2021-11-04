import express from 'express';
import connection from './models/connections.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection().then(() => app.listen(PORT, (console.log(`Listening at port ${PORT}`))));