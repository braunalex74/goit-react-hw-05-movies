import React, { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from '../../api/api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = () => {
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
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>

      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/movies/:movieId/cast"
          element={<Cast credits={credits} />}
        />
        <Route
          path="/movies/:movieId/reviews"
          element={<Reviews reviews={reviews} />}
        />
      </Routes>
    </div>
  );
};

export default MovieDetails;
