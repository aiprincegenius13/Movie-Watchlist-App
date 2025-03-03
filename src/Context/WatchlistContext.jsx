import React, { createContext, useReducer, useContext } from 'react';

const WatchlistContext = createContext();

const initialState = {
  watchlist: []
};

const watchlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      // Avoid adding duplicates
      if (state.watchlist.find(anime => anime.id === action.payload.id)) {
        return state;
      }
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case 'REMOVE_FROM_WATCHLIST':
      return { ...state, watchlist: state.watchlist.filter(anime => anime.id !== action.payload) };
    default:
      return state;
  }
};

export const WatchlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(watchlistReducer, initialState);
  return (
    <WatchlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
