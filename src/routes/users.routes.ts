import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  const { nome: name, email, dataDeNascimento: bornDate } = request.body;

  return response.json({
    name,
    email,
    bornDate,
  });
});

export default usersRouter;
