
# FavoriteNotes

FavoriteNotes é uma aplicação web que permite aos usuários criar, editar, visualizar e excluir notas, 
as notas podem ser marcadas como favoritas para fácil acesso, a aplicação é dividida em dois componentes principais: 
o frontend, que gerencia a interface do usuário, e o backend, que lida com a lógica de negócios e o gerenciamento de dados.


## Funcionalidades

- Criar Notas: Permite aos usuários adicionar novas notas com título e conteúdo.
- Editar Notas: Funcionalidade para editar notas existentes.
- Excluir Notas: Possibilidade de deletar notas que não são mais necessárias.
- Buscar Notas: Voce pode facilmente encontrar uma nota especifica buscando por um palavra chave.
- Filtrar por tags: Pode filtrar por uma tag especifica verificando todas as notas que foram criadas com um determinado assunto.

## Arquitetura do projeto

## Frontend
O frontend foi construído usando React, com suporte a TypeScript e Vite para a configuração do ambiente de desenvolvimento.

#### Principais Tecnologias Utilizadas:
- React: Biblioteca JavaScript para a construção de interfaces de usuário.
- Vite: Ferramenta de build e desenvolvimento rápido.
- React Router: Gerenciamento de rotas.
- Styled Components: Estilização de componentes de forma isolada.
- Axios: Cliente HTTP para requisições à API backend.
#### Scripts Disponíveis:
- dev: Inicia o servidor de desenvolvimento.
- build: Compila a aplicação para produção.
- lint: Verifica o código com ESLint.
- preview: Pré-visualiza a aplicação compilada.
## Backend
O backend é uma API desenvolvida utilizando Node.js e Express. Ele gerencia a lógica de autenticação, operações CRUD das notas e a comunicação com o banco de dados SQLite.

#### Principais Tecnologias Utilizadas:
- Express: Framework minimalista para Node.js.
- Knex: Query builder SQL para operações com banco de dados.
- SQLite: Banco de dados leve e eficiente.
- JWT: Autenticação baseada em tokens.
- BcryptJS: Hashing de senhas para armazenamento seguro.
#### Scripts Disponíveis:
- dev: Inicia o servidor de desenvolvimento usando Nodemon.
- migrate: Executa as migrações do banco de dados usando Knex.
## Instalação

Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina.

### Passo a Passo
Clone o repositório:

```bash
git clone https://github.com/kennedysferreira/projetoFavoriteNotes.git
```
Instale as dependências do backend:

```bash
cd projetoFavoriteNotes/api
npm install
```
Instale as dependências do frontend:

```bash
cd ../frontend
npm install
```
Configure as variáveis de ambiente no backend criando um arquivo .env:

``` makefile
MONGODB_URI=<sua_uri_mongodb>
PORT=3333
JWT_SECRET=<sua_chave_secreta>
```
Inicie o servidor backend:

```bash
cd ../api
npm run dev
```
Inicie o servidor frontend:

```bash
cd ../frontend
npm run dev
```
Acesse http://localhost:3333 no seu navegador para utilizar a aplicação.




## Contribuindo

Contribuições são sempre bem-vindas!

Se você tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

