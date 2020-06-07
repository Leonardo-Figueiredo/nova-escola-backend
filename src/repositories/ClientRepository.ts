import { EntityRepository, Repository } from 'typeorm';
import { parseISO, format } from 'date-fns';

import Client from '../models/Client';

interface PaginationParams {
  limite: number;
  pagina: number;
}

interface ClientsList {
  total: number;
  lista: Client[];
}

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  public async getClientList({
    limite,
    pagina,
  }: PaginationParams): Promise<ClientsList> {
    const [clients, total] = await this.findAndCount({
      skip: limite * pagina - limite,
      take: limite,
    });

    clients.forEach(client => {
      const { dataDeNascimento } = client;

      const parsedDate = format(parseISO(dataDeNascimento), 'dd/MM/yyyy');

      client.dataDeNascimento = parsedDate;
    });

    const clientList = {
      total,
      lista: clients,
    };

    return clientList;
  }
}

export default ClientRepository;
