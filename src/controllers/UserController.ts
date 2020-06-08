import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';

import AppError from '../errors/AppError';

import CreateClientService from '../services/CreateClientService';
import ClientRepository from '../repositories/ClientRepository';
import FindClientService from '../services/FindClientService';
import UpdateClientService from '../services/UpdateClientService';
import DeleteClientService from '../services/DeleteClientService';

interface Cliente {
  nome: string;
  email: string;
  dataDeNascimento: Date;
}

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { nome, email, dataDeNascimento }: Cliente = request.body;

    try {
      const schema = Yup.object().shape({
        nome: Yup.string()
          .max(45, 'Max 45 letters.')
          .required('Name is required.'),
        email: Yup.string()
          .email()
          .max(45, 'Max 45 letters.')
          .required('E-mail is required'),
        dataDeNascimento: Yup.date().required(
          'Born date is required in format mm/dd/yyyy.',
        ),
      });

      await schema.validate(request.body);
    } catch (error) {
      throw new AppError(error.message);
    }

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

    try {
      const schema = Yup.object().shape({
        limite: Yup.number().positive().integer(),
        pagina: Yup.number().positive().integer(),
      });

      await schema.validate(request.query);
    } catch (error) {
      throw new AppError(error.message);
    }

    const clientRepository = getCustomRepository(ClientRepository);

    const clients = await clientRepository.getClientList({
      limite,
      pagina,
    });

    return response.json(clients);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const schema = Yup.object().shape({
        id: Yup.number().positive().integer().required('ID is required.'),
      });

      await schema.validate(request.params);
    } catch (error) {
      throw new AppError(error.message);
    }

    const findClientService = new FindClientService();

    const client = await findClientService.execute(Number(id));

    return response.json(client);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, email, dataDeNascimento } = request.body;

    try {
      const paramsSchema = Yup.object().shape({
        id: Yup.number().positive().integer().required('ID is required.'),
      });

      const bodySchema = Yup.object().shape({
        nome: Yup.string().max(45, 'Max 45 letters.'),
        email: Yup.string().email().max(45, 'Max 45 letters.'),
        dataDeNascimento: Yup.date(),
      });

      await bodySchema.validate(request.body);
      await paramsSchema.validate(request.params);
    } catch (error) {
      throw new AppError(error.message);
    }

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

    try {
      const schema = Yup.object().shape({
        id: Yup.number().positive().integer().required('ID is required.'),
      });

      await schema.validate(request.query);
    } catch (error) {
      throw new AppError(error.message);
    }

    const deleteClientService = new DeleteClientService();

    await deleteClientService.execute(Number(id));

    return response.send();
  }
}

export default new UserController();
