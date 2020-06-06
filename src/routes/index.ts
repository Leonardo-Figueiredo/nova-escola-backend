import { Router } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/cliente', usersRouter);

export default routes;
