import express from 'express';
import { json } from 'express';
import LoginUser from './controllers/LoginUserController';

const app = express();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */
app.use(json());

/* Controller */
app.use('/api/userlogin/login', LoginUser);

export default app;