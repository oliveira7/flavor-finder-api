
## Projeto
Pequena API para listagem de receitas.

### Techs
- NestJs - A progressive Node.js framework
- MongoDB - The Developer Data Platform

### Installation

```bash
# Instação das dependências.
$ npm install
# Criando um container para o MongoDB.
$ docker-compose up -d
# Rodando aplicação.
$ npm run start:dev
```

### Test
Para testar os endpoints pelo postman, só importar o ./postman-endpoints.json na raiz do projeto.

```bash
# unit tests
$ npm run test
```
