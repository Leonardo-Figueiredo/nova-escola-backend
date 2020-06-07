/* eslint-disable prefer-destructuring */
import { getCustomRepository } from 'typeorm';
import { Router } from 'express';

import CreateClientService from '../services/CreateClientService';
import FindClientService from '../services/FindClientService';
import ClientRepository from '../repositories/ClientRepository';

const clientsRouter = Router();

clientsRouter.post('/', async (request, response) => {
  const { nome, email, dataDeNascimento } = request.body;

  const createClient = new CreateClientService();

  const client = await createClient.execute({ nome, email, dataDeNascimento });

  return response.status(201).json(client);
});

clientsRouter.get('/', async (request, response) => {
  const { limite = 10, pagina = 1 } = request.query;

  const clientRepository = getCustomRepository(ClientRepository);

  const clients = await clientRepository.getClientList({ limite, pagina });

  return response.json(clients);
});

clientsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const findClientService = new FindClientService();

  const client = await findClientService.execute({ id });

  return response.json(client);
});

clientsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
});

export default clientsRouter;
