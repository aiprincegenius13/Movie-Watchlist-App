// movieReducer.js
export const initialState = {
    movies: [],          // List of movies from API
    selectedMovie: null, // Movie whose details are displayed
    watchlist: []        // Movies the user wants to watch
  };
  
  export function movieReducer(state, action) {
    switch(action.type) {
      case 'SET_MOVIES':
        return { ...state, movies: action.payload };
      case 'SELECT_MOVIE':
        return { ...state, selectedMovie: action.payload };
      case 'ADD_TO_WATCHLIST':
        return { ...state, watchlist: [...state.watchlist, action.payload] };
      case 'REMOVE_FROM_WATCHLIST':
        return { ...state, watchlist: state.watchlist.filter(movie => movie.id !== action.payload) };
      default:
        return state;
    }
  }
  