import { getCustomRepository } from 'typeorm';
import { format, parseISO } from 'date-fns';

import AppError from '../errors/AppError';

import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';

interface RequestDTO {
  id: number;
}

class FindClientService {
  public async execute({ id }: RequestDTO): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne({ id });

    if (!client) throw new AppError('Client not found.', 404);

    const { dataDeNascimento } = client;

    const parsedDate = format(parseISO(dataDeNascimento), 'dd/MM/yyyy');

    client.dataDeNascimento = parsedDate;

    return client;
  }
}

export default FindClientService;
