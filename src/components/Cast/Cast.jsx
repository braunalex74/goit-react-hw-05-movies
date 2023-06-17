import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const creditsData = await getMovieCredits(movieId);
        setCredits(creditsData);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {credits.map(castMember => (
          <li key={castMember.id}>{castMember.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
