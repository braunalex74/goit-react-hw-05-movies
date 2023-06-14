import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast();
  }, []);

  const fetchMovieCast = async () => {
    try {
      const response = await getMovieCast(movieId);
      setCast(response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Movie Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map(member => (
            <li key={member.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
              />
              <p>Name: {member.name}</p>
              <p>Character: {member.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
};

export default Cast;
