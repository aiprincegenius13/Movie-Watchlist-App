import React, { useContext, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { fetchMovieCast } from '../services/imdbAPI';

const MovieDetail = ({ movieId }) => {
  const { state, dispatch } = useContext(MovieContext);
  const { cast, status, error } = state;

  useEffect(() => {
    const getCast = async () => {
      dispatch({ type: 'FETCH_CAST_REQUEST' });
      try {
        const data = await fetchMovieCast(movieId);
        dispatch({ type: 'FETCH_CAST_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_CAST_FAILURE', payload: err.message });
      }
    };

    getCast();
  }, [dispatch, movieId]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Movie Cast</h2>
      <ul>
        {cast && cast.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;
