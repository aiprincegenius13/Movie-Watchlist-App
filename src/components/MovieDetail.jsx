// MovieDetail.js
import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetail = ({ movie }) => {
  const { dispatch } = useContext(MovieContext);

  const addToWatchlist = () => {
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });
  };

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <p><strong>Year:</strong> {movie.Year}</p>
      <button onClick={addToWatchlist}>Add to Watchlist</button>
      {/* Additional details can be added here */}
    </div>
  );
};

export default MovieDetail;
