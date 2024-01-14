# User Management API

Esta é uma API simples para gerenciamento de usuários, desenvolvida em Node.js (v16.20) e Express (v4). A API oferece cinco endpoints básicos para operações CRUD (Create, Read, Update, Delete) de usuários.

## Endpoints

1. **GET /users/**
   - Retorna a lista de todos os usuários.

2. **GET /users/:id**
   - Retorna os detalhes de um usuário específico com base no ID fornecido.

3. **POST /users/**
   - Cria um novo usuário. Os dados do usuário devem ser fornecidos no corpo da solicitação.

4. **PUT /users/:id**
   - Atualiza os dados de um usuário específico com base no ID fornecido. Os dados atualizados devem ser fornecidos no corpo da solicitação.

5. **DELETE /users/:id**
   - Exclui um usuário específico com base no ID fornecido.

## Configuração do Banco de Dados

As variáveis de ambiente necessárias para a configuração do banco de dados estão listadas no arquivo `.env`. Certifique-se de preenchê-las com as informações apropriadas antes de iniciar a aplicação.

Exemplo do conteúdo do arquivo `.env`:

```env
DB_HOST = localhost
DB_PORT = porta_banco
DB_USER = seu_usuario
DB_PWD = sua_senha
DB_NAME = nome_do_banco
```

**Importante:** Crie um arquivo `.env` na raiz do projeto e preencha as variáveis com suas informações específicas.

## Como Usar

Siga estas etapas para baixar, configurar e iniciar a aplicação:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` e preencha as variáveis de ambiente com as informações do seu banco de dados.

5. Inicie a aplicação:

   ```bash
   npm run start
   ```

A aplicação estará disponível em `http://localhost:3000` por padrão. Certifique-se de que o banco de dados está configurado corretamente antes de iniciar a aplicação.

## Contribuições

Sinta-se à vontade para contribuir para este projeto. Abra issues para relatar problemas ou envie pull requests com melhorias.

Este é um repositório gratuito e aberto para colaboração.

