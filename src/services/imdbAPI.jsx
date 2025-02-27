export const fetchMovieCast = async (movieId = 'tt7631058') => {
    const url = `https://imdb236.p.rapidapi.com/imdb/${movieId}/cast`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b744adc9fdmshd57b346f6cb2e69p14f7c4jsn4a622c1a676e',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const fetchMoviePoster = async (movieId = 'tt7631058') => {
    const url = `https://imdb236.p.rapidapi.com/imdb/${movieId}/poster`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b744adc9fdmshd57b346f6cb2e69p14f7c4jsn4a622c1a676e',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const searchMovies = async (query) => {
    const url = `https://imdb236.p.rapidapi.com/imdb/search/${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b744adc9fdmshd57b346f6cb2e69p14f7c4jsn4a622c1a676e',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
};