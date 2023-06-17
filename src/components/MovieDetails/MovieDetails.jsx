import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from '../../api/api';
import {
  MovieDetailsContainer,
  MovieInfoContainer,
  Details,
  Poster,
  CastContainer,
  CastList,
  CastItem,
  CastImage,
  Button,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
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

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetailsContainer>
      <button onClick={handleGoBack}>Go Back</button>
      <h2>{movie.title}</h2>
      <MovieInfoContainer>
        <Poster>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </Poster>
        <Details>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview: {movie.overview}</p>
        </Details>
      </MovieInfoContainer>
      <Button onClick={handleToggleCast}>
        {showCast ? 'Hide Cast' : 'Show Cast'}
      </Button>

      {showCast && (
        <div>
          <CastContainer>
            <h3>Cast</h3>
            <CastList>
              {credits.map(castMember => (
                <CastItem key={castMember.id}>
                  <CastImage
                    src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                    alt={castMember.name}
                  />
                  {castMember.name}
                </CastItem>
              ))}
            </CastList>
          </CastContainer>
        </div>
      )}

      <Button onClick={handleToggleReviews}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </Button>

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
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
