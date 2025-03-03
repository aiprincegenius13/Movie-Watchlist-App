import React, { useState, useEffect } from 'react';
import { fetchAllAnime } from '../services/animeAPI';
import SearchBar from '../SearchBar';
import { useWatchlist } from '.../contexts/WatchlistContext';

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);
  const { dispatch } = useWatchlist();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllAnime();
        setAnimeList(data.data);
        setFilteredAnime(data.data);
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToWatchlist = (anime) => {
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: anime });
  };

  const handleSearch = (searchCriteria) => {
    const { genre, ranking, id } = searchCriteria;
    let results = animeList;

    if (genre) {
      results = results.filter(anime => anime.genres.includes(genre));
    }
    if (ranking) {
      results = results.filter(anime => anime.ranking === parseInt(ranking));
    }
    if (id) {
      results = results.filter(anime => anime.id === parseInt(id));
    }
    setFilteredAnime(results);
  };

  return (
    <div className="anime-list">
      <h2>Anime List</h2>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredAnime.map(anime => (
          <li key={anime.id}>
            <h3>{anime.title}</h3>
            <p>Genre: {anime.genres.join(', ')}</p>
            <p>Ranking: {anime.ranking}</p>
            <button onClick={() => handleAddToWatchlist(anime)}>Add to Watchlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
