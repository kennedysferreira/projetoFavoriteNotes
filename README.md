
# FavoriteNotes
FavoriteNotes is a web application that allows users to create, edit, view, and delete notes. Notes can be marked as favorites for easy access. The application is divided into two main components: the frontend, which manages the user interface, and the backend, which handles business logic and data management.


## Features
- Create Notes: Allows users to add new notes with a title and content.
- Edit Notes: Functionality to edit existing notes.
- Delete Notes: Ability to delete notes that are no longer needed.
- Search Notes: You can easily find a specific note by searching for a keyword.
- Filter by Tags: You can filter by a specific tag, checking all the notes created under a particular topic.

## Project Architecture

## Frontend
The frontend is built using React, with TypeScript support and Vite for the development environment setup.

#### Key Technologies Used:
- React: JavaScript library for building user interfaces.
- Vite: Fast build and development tool.
- React Router: Route management.
- Styled Components: Isolated component styling.
- Axios: HTTP client for making API requests to the backend.
#### Available Scripts:
- dev: Starts the development server.
- build: Compiles the application for production.
- lint: Checks the code with ESLint.
- preview: Previews the compiled application.
## Backend
The backend is an API developed using Node.js and Express. It manages authentication logic, CRUD operations for notes, and communication with the SQLite database.

#### Key Technologies Used:
- Express: Minimalist framework for Node.js.
- Knex: SQL query builder for database operations.
- SQLite: Lightweight and efficient database.
- JWT: Token-based authentication.
- BcryptJS: Password hashing for secure storage.
#### Available Scripts:
- dev: Starts the development server using Nodemon.
- migrate: Runs database migrations using Knex.
## Installation
###Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Steps
Clone the repository:

```bash
git clone https://github.com/kennedysferreira/projetoFavoriteNotes.git
```
Install backend dependencies:

```bash
cd projetoFavoriteNotes/api
npm install
```
Install frontend dependencies:

```bash
cd ../frontend
npm install
```

Start the backend server:

```bash
cd ../api
npm run dev
```
Start the frontend server:

```bash
cd ../frontend
npm run dev
```
Access http://localhost:5173 in your browser to use the application.




## Contributing
Contributions are always welcome!

If you have suggestions for improvements, feel free to open an issue or submit a pull request.
