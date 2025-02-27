import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieCarousel from './components/MovieCarousel';
import Watchlist from '../components/Watchlist';
import { MovieProvider } from './contexts/MovieContext'; 

function App() {
  return (
    <MovieProvider>
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/watchlist">Watchlist</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<MovieCarousel />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;