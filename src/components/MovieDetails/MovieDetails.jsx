import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from '../../api/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const handleToggleCast = async () => {
    if (!showCast) {
      try {
        const creditsData = await getMovieCredits(movieId);
        setCredits(creditsData);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    }

    setShowCast(!showCast);
  };

  const handleToggleReviews = async () => {
    if (!showReviews) {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    }

    setShowReviews(!showReviews);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      <button onClick={handleToggleCast}>
        {showCast ? 'Hide Cast' : 'Show Cast'}
      </button>

      {showCast && (
        <div>
          <h3>Cast</h3>
          <ul>
            {credits.map(castMember => (
              <li key={castMember.id}>{castMember.name}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleToggleReviews}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </button>

      {showReviews && (
        <div>
          <h3>Reviews</h3>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
