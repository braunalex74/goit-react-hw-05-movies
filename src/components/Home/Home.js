import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import MoviesList from '../MovieList/MovieList';

const Home = () => {
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
      <h2>Trending Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
