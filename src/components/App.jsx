import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      {' '}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
