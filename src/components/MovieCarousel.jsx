// MovieCarousel.js
import React, { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieDetail from './MovieDetail';

const MovieCarousel = () => {
  const { state, dispatch } = useContext(MovieContext);

  // Fetch movie data from OMDB API
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('https://www.omdbapi.com/?s=action&apikey=YOUR_API_KEY');
        const data = await response.json();
        if (data.Search) {
          dispatch({ type: 'SET_MOVIES', payload: data.Search });
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, [dispatch]);

  // Handle click to select movie for details
  const handleMovieClick = (movie) => {
    dispatch({ type: 'SELECT_MOVIE', payload: movie });
  };

  return (
    <div className="carousel">
      {state.movies.map(movie => (
        <div key={movie.imdbID} className="movie-card" onClick={() => handleMovieClick(movie)}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
        </div>
      ))}
      {/* Display movie details if a movie is selected */}
      {state.selectedMovie && <MovieDetail movie={state.selectedMovie} />}
    </div>
  );
};

export default MovieCarousel;
