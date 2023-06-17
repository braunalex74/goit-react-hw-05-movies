import React, { useEffect, useState } from 'react';
import { searchMovies } from '../../api/api';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const fetchSearchedMovies = async () => {
    try {
      const searchedMovies = await searchMovies(searchQuery);
      setMovies(searchedMovies);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = async () => {
    setSearched(true);
    fetchSearchedMovies();
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSelectMovie = movie => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    if (searched) {
      fetchSearchedMovies();
    }
  }, [searched]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (selectedMovie) {
    return (
      <div>
        <button onClick={handleBack}>Back</button>
        <MovieDetails movie={selectedMovie} />
      </div>
    );
  }

  return (
    <div>
      <h2>Movies</h2>
      {!selectedMovie && (
        <div>
          {!searched && (
            <div>
              <input type="text" value={searchQuery} onChange={handleChange} />
              <button onClick={handleSearch}>Search</button>
            </div>
          )}
          {searched && (
            <div>
              <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
