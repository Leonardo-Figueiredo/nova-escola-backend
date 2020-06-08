import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateClientService from '../services/CreateClientService';
import ClientRepository from '../repositories/ClientRepository';
import FindClientService from '../services/FindClientService';
import UpdateClientService from '../services/UpdateClientService';
import DeleteClientService from '../services/DeleteClientService';

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { nome, email, dataDeNascimento } = request.body;

    const createClient = new CreateClientService();

    const client = await createClient.execute({
      nome,
      email,
      dataDeNascimento,
    });

    return response.status(201).json(client);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const { limite = 10, pagina = 1 } = request.query;

    const clientRepository = getCustomRepository(ClientRepository);

    const clients = await clientRepository.getClientList({ limite, pagina });

    return response.json(clients);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findClientService = new FindClientService();

    const client = await findClientService.execute(id);

    return response.json(client);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, email, dataDeNascimento } = request.body;

    const updateClientService = new UpdateClientService();

    const client = await updateClientService.execute({
      id,
      nome,
      email,
      dataDeNascimento,
    });

    return response.json(client);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteClientService = new DeleteClientService();

    await deleteClientService.execute(id);

    return response.send();
  }
}

export default new UserController();
