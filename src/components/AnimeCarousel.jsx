import React, { useContext, useEffect, useState } from 'react';
import { fetchAnimeByGenre } from '../services/animeAPI';
import { MovieContext } from '../contexts/MovieContext';

const AnimeCarousel = () => {
  const { state, dispatch } = useContext(MovieContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAnimeByGenre(genre);
        dispatch({ type: 'SET_MOVIES', payload: data.data });
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };

    if (genre) {
      fetchData();
    }
  }, [dispatch, genre]);

  const nextAnime = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % state.movies.length);
  };

  const prevAnime = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + state.movies.length) % state.movies.length);
  };

  return (
    <div className="carousel">
      <input
        type="text"
        placeholder="Search by genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button onClick={prevAnime}>Previous</button>
      {state.movies.length > 0 && (
        <div className="carousel-item">
          <img src={state.movies[currentIndex].image} alt={state.movies[currentIndex].title} />
          <h3>{state.movies[currentIndex].title}</h3>
        </div>
      )}
      <button onClick={nextAnime}>Next</button>
    </div>
  );
};

export default AnimeCarousel;
