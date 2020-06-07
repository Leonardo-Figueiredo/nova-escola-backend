/* eslint-disable prefer-destructuring */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import Client from '../models/Client';
import CreateClientService from '../services/CreateClientService';

const clientsRouter = Router();

clientsRouter.post('/', async (request, response) => {
  const { nome, email, dataDeNascimento } = request.body;

  const createClient = new CreateClientService();

  const client = await createClient.execute({ nome, email, dataDeNascimento });

  return response.status(201).json(client);
});

clientsRouter.get('/', async (request, response) => {
  const { limite = 10, pagina = 1 } = request.query;

  const clientRepository = getRepository(Client);

  const clients = await clientRepository.findAndCount({
    skip: limite * pagina - limite,
    take: limite,
  });

  return response.json(clients);
});

export default clientsRouter;
