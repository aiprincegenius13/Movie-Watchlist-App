import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const Watchlist = () => {
  const { state, dispatch } = useContext(MovieContext);
  const { watchlist } = state;

  // For simplicity, assuming watchlist items are just strings. You can adjust as needed.
  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
      {/* Add functionality to remove items or add new movies as needed */}
    </div>
  );
};

export default Watchlist;
