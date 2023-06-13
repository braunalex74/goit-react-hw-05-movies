import React from 'react';

const MovieDetails = ({ match }) => {
  const { movieId } = match.params;

  return (
    <div>
      <h2>Movie Details - {movieId}</h2>
    </div>
  );
};

export default MovieDetails;
