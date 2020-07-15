import React, { Component } from 'react';
import Movie from '../components/Movie'
import { graphql } from 'react-apollo';
import {allMovies} from '../queries/queries'

class Movies extends Component {
  render() {
    let data = this.props.data
    if(data.loading){
      return <h2 className="message">We are loading your movies...</h2>
    }
    if(data.movies.length === 0){
      return <h2 className="message">Please add movies of your choice</h2>
    }
    return (
      <div className="movies">
        {data.movies.map((movie) => {
          return <Movie 
            key={movie.name}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
            />
        })}
      </div>
    );
  }
}

export default graphql(allMovies)(Movies)