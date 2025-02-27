// MovieContexts.jsx
import React, { createContext, useReducer } from 'react';
import { movieReducer, initialState } from '../movieReducer';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
