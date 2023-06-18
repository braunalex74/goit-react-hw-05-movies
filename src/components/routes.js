// import React from 'react';
// import { Route } from 'react-router-dom';

// const Home = React.lazy(() => import('./Home/Home'));
// const Movies = React.lazy(() => import('./Movies/Movies'));
// const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = React.lazy(() => import('./Cast/Cast'));
// const Reviews = React.lazy(() => import('./Reviews/Reviews'));

// export const routes = [
//   {
//     path: '/',
//     exact: true,
//     component: Home,
//   },
//   {
//     path: '/movies',
//     exact: true,
//     component: Movies,
//   },
//   {
//     path: '/movies/:movieId',
//     exact: true,
//     component: MovieDetails,
//   },
//   {
//     path: '/movies/:movieId/cast',
//     exact: true,
//     component: Cast,
//   },
//   {
//     path: '/movies/:movieId/reviews',
//     exact: true,
//     component: Reviews,
//   },
// ];

// export const RenderRoutes = () => (
//   <React.Suspense fallback={<div>Loading...</div>}>
//     {routes.map((route, index) => (
//       <Route
//         key={index}
//         path={route.path}
//         exact={route.exact}
//         component={route.component}
//       />
//     ))}
//   </React.Suspense>
// );
