import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
