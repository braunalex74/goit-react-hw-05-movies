import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />} />
      <Route path="movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      <Route path="*" element={<div>Nothing found</div>} />
    </Routes>
  );
};

export default App;
