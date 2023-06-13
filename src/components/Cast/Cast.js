import React from 'react';

export const Cast = ({ match }) => {
  const { movieId } = match.params;

  return (
    <div>
      <h2>Movie Cast - {movieId}</h2>
    </div>
  );
};

export default Cast;
