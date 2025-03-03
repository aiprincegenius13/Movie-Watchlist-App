import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

const fetchAnime = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b744adc9fdmshd57b346f6cb2e69p14f7c4jsn4a622c1a676e',
      'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};

//get all anime
const urlAllAnime = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
fetchAnime(urlAllAnime).then(result => console.log(result));

//get anime by genre
const urlGenre = 'https://anime-db.p.rapidapi.com/genre';
fetchAnime(urlGenre).then(result => console.log(result));

//get anime by id
const urlById = 'https://anime-db.p.rapidapi.com/anime/by-id/1';
fetchAnime(urlById).then(result => console.log(result));

//get anime by rankings
const urlByRanking = 'https://anime-db.p.rapidapi.com/anime/by-ranking/1';
fetchAnime(urlByRanking).then(result => console.log(result));

export const fetchAnimeByGenre = async (genre) => {
  const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=${genre}&sortBy=ranking&sortOrder=asc`;
  return fetchAnime(url);
};





