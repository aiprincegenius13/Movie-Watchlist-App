import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [genre, setGenre] = useState('');
  const [ranking, setRanking] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ genre, ranking, id });
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search by Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by Ranking"
        value={ranking}
        onChange={(e) => setRanking(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
