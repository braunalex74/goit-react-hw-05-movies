import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from '../../api/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCredits();
    fetchMovieReviews();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await getMovieDetails(movieId);
      setMovie(response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const fetchMovieCredits = async () => {
    try {
      const response = await getMovieCredits(movieId);
      setCredits(response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const fetchMovieReviews = async () => {
    try {
      const response = await getMovieReviews(movieId);
      setReviews(response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>

      <h3>Cast:</h3>
      <ul>
        {credits.map(castMember => (
          <li key={castMember.id}>{castMember.name}</li>
        ))}
      </ul>

      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
