import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const ReviewForm = ({ movieId }) => {
  const [review, setReview] = useState('');
  const { dispatch } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review) return;
    dispatch({ type: 'ADD_REVIEW', payload: { movieId, review } });
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;