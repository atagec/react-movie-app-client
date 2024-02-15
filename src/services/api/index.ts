import {Movie} from "../../entities/Movie"


const movies = [
  {
    "id": 1,
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    "title": "Dark Knight Rises",
    "genre": "Action - Drama",
    "director": "Christopher Nolan",
    "rating": 8
  },
  {
    "id": 2,
    "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "title": "Interstellar",
    "genre": "Action - Advventure - Sci-Fi",
    "director": "Christopher Nolan",
    "rating": 8.7
  },
  {
    "id": 3,
    "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    "title": "Inception",
    "genre": "Action - Adventure - Sci-Fi",
    "director": "Christopher Nolan",
    "rating": 8.8
  },
  {
    "id": 4,
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_FMjpg_UX1000_.jpg",
    "title": "The Martian",
    "genre": "Adventure - Drama - Sci-Fi",
    "director": "Ridley Scott",
    "rating": 8
  },
  {
    "id": 5,
    "poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "title": "Blade Runner",
    "genre": "Action - Drama - Sci-Fi",
    "director": "Ridley Scott",
    "rating": 8.1
  },
  {
    "id": 6,
    "poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "title": "Gladiator",
    "genre": "Action - Adventure - Drama",
    "director": "Ridley Scott",
    "rating": 8.5
  }
]

export const fetchMovies = async (): Promise<Movie[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("fetched movies");

  // const filteredMovies = movies.filter((movie) => {
  //   movie.title.toLowerCase().includes(query.toLowerCase())
  // })

  console.log("filteredMovies", movies);

  return [...movies]
}