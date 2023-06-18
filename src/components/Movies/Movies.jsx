import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from '../../api/api';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

const Movies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [prevSearchQuery, setPrevSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchSearchedMovies = useCallback(async () => {
    try {
      const searchedMovies = await searchMovies(searchQuery);
      setMovies(searchedMovies);
    } catch (error) {
      setError(error.message);
    }
  }, [searchQuery]);

  const handleSearch = useCallback(() => {
    navigate(
      `/goit-react-hw-05-movies/movies?search=${encodeURIComponent(
        searchQuery
      )}`
    );
  }, [navigate, searchQuery]);

  const handleSelectMovie = useCallback(
    movieId => {
      setSelectedMovieId(movieId);
      navigate(`/goit-react-hw-05-movies/movies/${movieId}`);
    },
    [navigate]
  );

  const handleBack = useCallback(() => {
    setSelectedMovieId(null);
    setSearchQuery(prevSearchQuery);
    navigate('../'); // or navigate('/goit-react-hw-05-movies/movies')
  }, [prevSearchQuery, navigate]);

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search).get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
      setPrevSearchQuery(searchParam);
    }
  }, [location.search]);

  useEffect(() => {
    if (searchQuery !== '') {
      fetchSearchedMovies();
    }
  }, [searchQuery, fetchSearchedMovies]);

  useEffect(() => {
    const movieId = location.pathname.split('/').pop();
    if (movieId && !isNaN(movieId)) {
      setSelectedMovieId(parseInt(movieId));
    }
  }, [location.pathname]);

  if (error) {
    return <div>Помилка: {error}</div>;
  }

  if (selectedMovieId) {
    const selectedMovie = movies.find(movie => movie.id === selectedMovieId);
    return (
      <div>
        <button onClick={handleBack}>Назад</button>
        <MovieDetails movie={selectedMovie} />
      </div>
    );
  }

  return (
    <div>
      <h2>Фільми</h2>
      <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Пошук</button>
      </div>
    </div>
  );
};
export default Movies;
