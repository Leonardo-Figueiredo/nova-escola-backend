import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import ClientRepository from '../repositories/ClientRepository';

class DeleteClientService {
  public async execute(id: number): Promise<void> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne({ id });

    if (!client) throw new AppError('Client not found', 404);

    await clientRepository.remove(client);
  }
}

export default DeleteClientService;
