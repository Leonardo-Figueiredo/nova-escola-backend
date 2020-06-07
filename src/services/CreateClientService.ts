import { getCustomRepository } from 'typeorm';
import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';
import AppError from '../errors/AppError';

interface RequestDTO {
  nome: string;
  email: string;
  dataDeNascimento: Date;
}

class CreateClientService {
  public async execute({
    nome,
    email,
    dataDeNascimento,
  }: RequestDTO): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);
    const clientAlreadyExists = await clientRepository.findOne({
      email,
    });
    if (clientAlreadyExists) throw new AppError('This email is not available.');

    const parsedDate = new Date(dataDeNascimento);

    const client = clientRepository.create({
      nome,
      email,
      dataDeNascimento: parsedDate,
    });

    await clientRepository.save(client);

    return client;
  }
}

export default CreateClientService;
