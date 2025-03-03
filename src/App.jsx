import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnimeCarousel from './components/AnimeCarousel';
import Watchlist from '../components/Watchlist';
import { WatchlistProvider } from '../contexts/WatchlistContext';
import { MovieProvider } from './contexts/MovieContext';

const App = () => {
  return (
    <MovieProvider>
      <WatchlistProvider>
        <Router>
          <div className="app">
            <header>
              <h1>Anime Review & Watchlist App</h1>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<AnimeCarousel />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </div>
        </Router>
      </WatchlistProvider>
    </MovieProvider>
  );
};

export default App;
