import { Router } from 'express';
import clientsRouter from './clients.routes';

const routes = Router();

routes.use('/cliente', clientsRouter);

export default routes;
