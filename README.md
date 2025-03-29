# Liga dos Campeões API

Este projeto consiste no desenvolvimento de uma API para a Liga dos Campeões da UEFA, utilizando Node.js, TypeScript e o framework Express.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express.js**

## 📌 Funcionalidades

- Retornar todos os jogadores
- Cadastrar um jogador
- Remove um jogador
- Retorna todos os clubes cadastrados
- Atualiza informações de um jogador

## 📦 Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/kaynanoliveira/node-api-champions-league.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## 🛠 Endpoints Principais

- `GET /players` → Retorna todos os jogadores
- `GET /players/:id` → Retorna um jogador pelo ID
- `POST /players` → Adiciona um novo jogador
- `DELETE /players/:id` → Remove um jogador
- `PATCH /players/:id` → Atualiza informações de um jogador pelo ID
- `GET /clubs` → Retorna todos os clubes

