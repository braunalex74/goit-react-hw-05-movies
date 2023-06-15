import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import MoviesList from '../MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const response = await getTrendingMovies();
      setMovies(response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
