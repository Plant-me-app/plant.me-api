# PLANT.ME API

Esse repositório é responsável por armazenar o código do _back-end_ aplicativo PLANT.ME.

## Dependências

Se preferir executar o projeto com o docker, pode pular direto para a instalação do [docker](#docker) e do [docker compose](#docker-compose).

### Node 19

Se seu sistema operacional for Windows ou macOS, siga as instruções no [site oficial do Node](https://nodejs.org/en/download/).

Se seu sistema operacional for Linux, siga as instruções no [github do NodeSource](https://github.com/nodesource/distributions/blob/master/README.md).

### MongoDB

Faça a instalação do MongoDB seguindo as instruções do [site oficial](https://www.mongodb.com/docs/manual/administration/install-community/).

### Docker

Faça a instalação do Docker seguindo as instruções do [site oficial](https://docs.docker.com/engine/install/), de acordo com seu sistema operacional.

### Docker Compose

Faça a instalação do Docker Compose seguindo as instruções do [site oficial](https://docs.docker.com/compose/install/), de acordo com seu sistema operacional.

## Utilização

Primeiro, é necessário clonar este repositório:

```
git clone https://github.com/Plant-me-app/plant.me-api.git
```

Ao clonar, acesse a pasta criada e execute o comando para instalar as dependências do projeto:

```
cd plant.me-api
```

Se optar por executar com o docker, pode pular para a execução com o [docker](#docker-1)

```
npm install -g
```

Para executar o aplicativo, execute o comando:

```
npm start
```

O projeto estará rodando no console.

### Docker

Para executar o projeto utilizando o docker, basta executar o comando a seguir:

```
docker-compose up
```
