import React, { useState } from 'react';
import StarRating from './StarRating';

function ReviewForm({ beachId, onReviewSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    if (rating === 0 || comment.trim() === '') {
      alert('Please provide a rating and a comment.');
      return;
    }

    const newReview = {
      beachId: beachId,
      rating: rating,
      comment: comment,
      // You might want to add a timestamp or user info here later
    };

    // Call a function passed down from the parent component to handle the submission
    onReviewSubmit(newReview);

    // Clear the form after submission
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='review-form'>
        <label htmlFor="rating">Rating:</label>
        <StarRating onRatingChange={handleRatingChange} />
      </div>
      <div className='review-form'>
        <label htmlFor="comment">Review:</label>
        <textarea
          id="comment"
          rows="5"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className='button-container'>
        <button type="submit">Submit Review</button>
      </div>
    </form>
  );
}

export default ReviewForm;