import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';

class FindClientService {
  public async execute(id: number): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne(id);

    if (!client) throw new AppError('Client not found.', 404);

    return client;
  }
}

export default FindClientService;
