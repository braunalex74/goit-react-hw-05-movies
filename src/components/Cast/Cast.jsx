import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits } from '../../api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieDetails, movieCredits] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCredits(movieId),
        ]);
        setMovie(movieDetails);
        setCredits(movieCredits);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>Movie Details</h3>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Vote Average: {movie.vote_average}</p>

      <h3>Cast</h3>
      <ul>
        {credits.map(castMember => (
          <li key={castMember.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
              alt={castMember.name}
            />
            {castMember.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
