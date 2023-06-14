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
    const fetchMovieData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        const movieCredits = await getMovieCredits(movieId);
        const movieReviews = await getMovieReviews(movieId);
        setMovie(movieDetails);
        setCredits(movieCredits);
        setReviews(movieReviews);
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchMovieData();
  }, [movieId]);

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
