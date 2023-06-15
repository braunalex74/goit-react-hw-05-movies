import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const styles = {
  ul: css`
    list-style: none;
    padding: 0;
  `,
  li: css`
    margin-bottom: 8px;
  `,
  link: css`
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
};

const MoviesList = ({ movies }) => {
  return (
    <ul css={styles.ul}>
      {movies.map(movie => (
        <li key={movie.id} css={styles.li}>
          <Link to={`/movies/${movie.id}`} css={styles.link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
