import { getCustomRepository } from 'typeorm';
import { format } from 'date-fns';

import AppError from '../errors/AppError';

import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';

interface RequestDTO {
  id: string;
  nome?: string;
  email?: string;
  dataDeNascimento?: Date;
}

class UpdateClientService {
  public async execute({
    id,
    nome,
    email,
    dataDeNascimento,
  }: RequestDTO): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne({ id });

    if (!client) throw new AppError('Client ID not found.', 404);

    if (email) {
      const duplicatedEmail = await clientRepository.findOne({
        email,
      });

      if (duplicatedEmail)
        throw new AppError('This e-mail is already used.', 403);

      client.email = email || client.email;
    }

    if (dataDeNascimento) {
      const parsedDate = new Date(dataDeNascimento);
      client.dataDeNascimento = parsedDate;
    }

    if (nome) client.nome = nome;

    await clientRepository.save(client);

    // const updatedClient = {
    //   ...client,
    //   dataDeNascimento: format(client.dataDeNascimento, 'dd/MM/yyyy'),
    // };

    return client;
  }
}

export default UpdateClientService;
