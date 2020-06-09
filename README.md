# REST API - Nova Escola

## Requisitos para executar a API localmente:
1 - SO: Windows 7+ ou Linux (Testado em Ubuntu 18.04)<br>
2 - Node.js 12.16.2 + (Testado na versão 12.16.2)<br>
3 - MySQL v5.7.30 (Testado na versão 5.7.30)<br>
4 - (Opcional) Yarn 1.22.4 (Testado na versão 1.22.4)<br>
5 - Terminal Linux / Terminal MAC / Windows PowerShell / CMD<br>

Para executar a API, você deve executar um “git clone” em seu console conforme o seguinte exemplo:
git clone https://github.com/Leonardo-Figueiredo/nova-escola-backend

## Variáveis de Ambiente
Após clonar o repositório, deverá setar as variáveis de ambiente no arquivo “.env” conforme exemplo abaixo.<br>

SERVER_PORT = 3333<br>
Porta que a aplicação irá utilizar para ser consultada.<br>


TYPEORM_CONNECTION = mysql<br>
Banco de dados que o ORM irá utilizar, conforme o desafio, necessita o valor “mysql”.<br>


TYPEORM_HOST = localhost<br>
Host do banco de dados, se o banco estiver hospedado online, colocar o endereço correspondente.<br>

TYPEORM_PORT = 3306<br>
Porta para acessar o banco de dados.<br>


TYPEORM_USERNAME = root<br>
Nome do usuário do banco de dados.<br>

TYPEORM_PASSWORD = novaescola<br>
Senha do usuário do banco de dados.}<br>


TYPEORM_DATABASE = novaescola<br>
Nome da instância de banco de dados que a API irá utilizar.<br>


TYPEORM_SYNCHRONIZE = true<br>
Sincronização do TypeORM.<br>
TYPEORM_ENTITIES = ./src/models/*.ts<br>
Local das Entidades.<br>


TYPEORM_MIGRATIONS = ./src/database/migrations/*.ts<br>
Local das Migrations com a extensão dos arquivos de Migrations.<br>


TYPEORM_MIGRATIONS_DIR = ./src/database/migrations<br>
Diretório das Migrations.<br>


## Scripts (Exetutados pelo Yarn ou NPX)
Após configurar as variáveis de ambiente, na raiz do projeto executar um “yarn start”  ou “npx start” (Testado com o Yarn).<br>

Este comando irá executar as migrations e iniciar a aplicação.<br>

start:migrations - Executa as migrations.<br>
revert:migrations - Reverte as migrations.<br>
start:app - Executa a API diretamente da pasta dist (gerada pela build)<br>.
** Caso utilize o comando acima, execute as migration antes de executar o mesmo **<br>

Documentação completa com prints no link abaixo:
https://docs.google.com/document/d/1rmuPhdwLMeqqdhx0VOHjzcqkM6U0kOx74rrtlwrSoLI/edit#
