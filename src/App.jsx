import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Movie Reviews and Watchlist</h1>

      <div className="container">
        <div className="movie-container">
          <h2>Movie List</h2>
          <div className="movie-list">
            <div className="movie">
              <h3>Movie Title</h3>
              <button>Add to Watchlist</button>
              <button>Add to Watched</button>
            </div>
          </div>
        </div>
      </div>
        <div className="watchlist-container">
          <h2>Watchlist</h2>
          <div className="watchlist">
            <div className="movie">
              <h3>Movie Title</h3>
              <button>Remove from Watchlist</button>
              <button>Add to Watched</button>
            </div>
          </div>
        </div>

        <div className="watched-container">
          <h2>Watched</h2>
          <div className="watched">
            <div className="movie">
              <h3>Movie Title</h3>
              <button>Remove from Watched</button>
              <button>Add Review</button>
            </div>
          </div>
        </div>

        <div className="review-container">
          <h2>Reviews</h2>
          <div className="reviews">
            <div className="review">
              <h3>Movie Title</h3>
              <p>Review</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App



