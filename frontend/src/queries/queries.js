import { gql } from "apollo-boost";

const allMovies = gql`
  {
    movies {
      name
      genre
      year
    }
  }
` 

const movieByName = gql`
    query movieByName($name: String!){
      movieByName(name: $name){
        name
        genre
        year
      }
    }
`

const addMovie = gql`
  mutation AddMovie($name: String!, $genre: String!, $year: String!){
    addMovie(name: $name, genre: $genre, year: $year){
      name
      genre
      year
    }
  }
`

export {allMovies, addMovie, movieByName}