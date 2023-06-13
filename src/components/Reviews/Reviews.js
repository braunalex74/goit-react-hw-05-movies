import React from 'react';

const Reviews = ({ match }) => {
  const { movieId } = match.params;

  return (
    <div>
      <h2>Movie Reviews - {movieId}</h2>
    </div>
  );
};
export default Reviews;
