import React from 'react';
import { useWatchlist } from '.../contexts/WatchlistContext';

const Watchlist = () => {
  const { state, dispatch } = useWatchlist();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: id });
  };

  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {state.watchlist.length === 0 ? (
        <p>No anime in your watchlist. Add some from the Anime List!</p>
      ) : (
        <ul>
          {state.watchlist.map(anime => (
            <li key={anime.id}>
              <h3>{anime.title}</h3>
              <button onClick={() => handleRemove(anime.id)}>
                Mark as Watched (Remove)
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
