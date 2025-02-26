import React, { createContext, useReducer } from 'react';

// Creating Movie Context
export const MovieContext = createContext();

// Define the initial state for Application
const initialState = {
    cast: [],
    reviews: [],
    watchlist: [],
    watched: [],
    status: "idle", // Default status
    error: null,
};

// Create a reducer function to update state depending on actions
function movieReducer(state, action) {
    switch (action.type) {
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
        case 'ADD_MOVIE_TO_WATCHED':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
                watched: [action.payload, ...state.watched]
            };
        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id)
            };
        case 'REMOVE_MOVIE_FROM_WATCHED':
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload.id)
            };
        case 'ADD_REVIEW':
            return {
                ...state,
                reviews: [action.payload, ...state.reviews]
            };
        case 'FETCH_CAST_REQUEST':
            return {
                ...state,
                status: 'loading',
                error: null
            };
        case 'FETCH_CAST_SUCCESS':
            return {
                ...state,
                status: 'success',
                cast: action.payload
            };
        case 'FETCH_CAST_FAILURE':
            return {
                ...state,
                status: 'error',
                error: action.payload
            };
        default:
            return state;
    }
}

// Create a provider component
export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider>
    );
};