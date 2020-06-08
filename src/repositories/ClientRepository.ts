/* eslint-disable no-param-reassign */
import { EntityRepository, Repository } from 'typeorm';

import dateFormatter from '../utils/dateFormatter';

import Client from '../models/Client';

interface PaginationParams {
  parsedLimite: number;
  parsedPagina: number;
}

interface ClientsList {
  total: number;
  lista: Client[];
}

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  public async getClientList({
    parsedLimite,
    parsedPagina,
  }: PaginationParams): Promise<ClientsList> {
    const [clients, total] = await this.findAndCount({
      skip: parsedLimite * parsedPagina - parsedLimite,
      take: parsedLimite,
    });

    const clientList = {
      total,
      lista: clients,
    };

    return clientList;
  }
}

export default ClientRepository;
