/* eslint-disable prefer-destructuring */
import { Router } from 'express';

import UserController from '../controllers/UserController';

const clientsRouter = Router();

clientsRouter.post('/', UserController.store);

clientsRouter.get('/', UserController.list);

clientsRouter.get('/:id', UserController.show);

clientsRouter.put('/:id', UserController.update);

clientsRouter.delete('/:id', UserController.destroy);

export default clientsRouter;
