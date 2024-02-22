
# React Movie App - Client

![App Screenshot](https://iili.io/JG3aON4.jpg)


This is a simple web application that allows you to create your favorite movie list.

## Functionality
- Users can see a list of movies on the front end.
- They can search for the movie they want.
- They also can add a new movie to the database.

## Tech Stack
### Frontend

- React as a UI library ( TypeScript )
- react-query, graphql-request to communicate with the backend.
- zustand for global state management.
- Github Actions, Github Pages for deployment and hosting.

### Backend
- GraphQL, Apollo, prisma ( to connect MongoDB, and perform write-find operations ).
- MongoDB as a database.
- Render to host the backend.


## Run Locally

Setup the [backend](https://github.com/atagec/react-movie-app-server) as well for full functionality.

- Clone the project

```bash
  git clone https://github.com/atagec/react-movie-app-client.git
```

- Go to the project directory

```bash
  cd react-movie-app-client
```

- Install dependencies

```bash
  npm install
```

- Start the server

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npx cypress run
```

