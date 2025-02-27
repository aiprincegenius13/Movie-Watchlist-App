// Watchlist.js
import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Watchlist = () => {
  const { state, dispatch } = useContext(MovieContext);

  const removeFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: id });
  };

  return (
    <div className="watchlist">
      <h1>Your Watchlist</h1>
      {state.watchlist.length === 0 ? (
        <p>No movies added yet!</p>
      ) : (
        state.watchlist.map(movie => (
          <div key={movie.imdbID} className="watchlist-item">
            <h3>{movie.Title}</h3>
            <button onClick={() => removeFromWatchlist(movie.imdbID)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Watchlist;
