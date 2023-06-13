// import React from 'react';
// import { Route } from 'react-router-dom';

// const Home = React.lazy(() => import('./components/Home'));
// const Movies = React.lazy(() => import('./components/Movies'));
// const MovieDetails = React.lazy(() => import('./components/MovieDetails'));
// const Cast = React.lazy(() => import('./components/Cast'));
// const Reviews = React.lazy(() => import('./components/Reviews'));

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
