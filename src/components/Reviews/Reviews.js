import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews();
  }, []);

  const fetchMovieReviews = async () => {
    try {
      const response = await getMovieReviews(movieId);
      setReviews(response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
