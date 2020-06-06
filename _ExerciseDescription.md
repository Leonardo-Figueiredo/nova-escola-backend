# Associação Nova Escola - Vaga para Desenvolvedor (Desafio Tecnico)

## Contexto
Neste desafio técnico queremos uma api REST e uma interface para usuários cadastrarem dados de clientes. Você poderá lançar mão de técnicas, bibliotecas e frameworks que julgar adequados. Não é obrigatório executar todas as etapas do teste, mas quanto mais você fizer melhor será avaliado.

___
## O que será analisado no desafio técnico

- Projeto
    - legibilidade do código
    - estruturação do código
    - documentação
    - se está disponivel online (subir em algum servidor)
    - facilidade de rodar a aplicação localmente

- Testes Automatizados
    - se existem
    - quais tipos
    - cobertura

- Automações (opcional)
    - integração contínua
    - docker

___
## Requisitos técnicos

- __Frontend__:
    - React com Material UI
- __Backend__:
    - Java (v8 ou maior) - Se você estiver aplicando para vaga de Java.
    - Javascript (Typescript desejável) - NodeJS v10.x ou maior - Se você estiver aplicando para vaga de NodeJS.
- __Banco de Dados__: MySQL

___
## Serviço de Cliente (backend - obrigatório)
O serviços da _api_ devem seguir a especificação abaixo. Não se preocupe com segurança (autorização, login, etc); a _api_ pode ficar aberta mesmo.

### Cadastro do cliente
\[`POST`\] `/cliente`

Corpo: JSON com dados do cliente a serem cadastrados

    Atributos:
        - nome: string
        - email: string
        - dataDeNascimento: date

Exemplo de corpo
```json
{
    "nome": "José",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

Resposta: JSON com dados do cliente acrescido do id (atributo identificador)

    Código da resposta: 201
```json
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

### Listagem do cliente
\[`GET`\] `/cliente?limite={numero}&pagina={numero}`

    Parametros Opcionais:
        - limite: valor que define quantidade maxima a ser retornada
            caso não seja enviado na requisição, usar valor padrao igual a 10
        - pagina: paginação da listagem baseado no total
            caso não seja enviado na requisição, usar valor padrao igual a 1

Corpo: _vazio_

Resposta: lista com objetos cadastrados na base limitados pelo parametro `limite` acrescido com o total de dados existente na base (usado para paginação do frontend)

Exemplo de resposta de requisição com `limite` igual a 1

    Código da resposta: 200
```json
{
    "total": 2039,
    "lista": [
        {
            "id": 1,
            "nome": "José",
            "email": "jose@email.com",
            "dataDeNascimento": "01/01/2000"
        }
    ]
}
```

### Detalhamento do cliente
\[`GET`\] `/cliente/{id}`

    Parametro Obrigatório:
        - id: identificador do cliente a ser retornado

Corpo: _vazio_

Resposta: objeto com dados do cliente

Exemplo de resposta da requisição

    Código: 200
```json
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

### Alteração do cliente
\[`PUT`\] `/cliente/{id}`

    Parametro obrigatório:
    - id: identificador do cliente a ser atualizado

Corpo: dados a serem atualizados do cliente

Exemplo do corpo
```json
{
    "nome": "José da Silva"
}
```

Resposta: objeto com dados do cliente

Exemplo da resposta

    Código da resposta: 200
```json
{
    "id": 1,
    "nome": "José da Silva",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

### Remoção do cliente
\[`DELETE`\] `/cliente/{id}`

    Parametro obrigatório:
        - id: identificador do cliente a ser removido

Corpo: _vazio_

Resposta: _vazio_

    Código da resposta: 200


## Interface para usuário (frontend - opcional)

    Usando React + Material UI desenvolver o frontend do CRUD de clientes especificado acima.