import axios from 'axios';

const API_KEY = '35196803-673541e2c14d14661bda49ca7';

export const getTrendingMovies = async (
  searchQuery,
  currentPage,
  perPage = 12
) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        searchQuery
      )}&page=${currentPage}&per_page=${perPage}`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=104cb1f11a5d6d55ba8d6504d9bd060a`
    );
    const data = await response.json();
    return data.cast;
  } catch (error) {
    throw new Error('Failed to fetch movie cast');
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=104cb1f11a5d6d55ba8d6504d9bd060a`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=104cb1f11a5d6d55ba8d6504d9bd060a`
    );
    const data = await response.json();
    return data.cast;
  } catch (error) {
    throw new Error('Failed to fetch movie credits');
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=104cb1f11a5d6d55ba8d6504d9bd060a`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch movie reviews');
  }
};

// import axios from 'axios';

// export const fetchImages = async (searchQuery, currentPage, perPage = 12) => {
//   try {
//     const response = await axios.get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
//         searchQuery
//       )}&page=${currentPage}&per_page=${perPage}`
//     );
//     return response.data.hits;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     return [];
//   }
// };
