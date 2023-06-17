export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=104cb1f11a5d6d55ba8d6504d9bd060a`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch trending movies');
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

export const searchMovies = async query => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=104cb1f11a5d6d55ba8d6504d9bd060a&query=${encodeURIComponent(
        query
      )}`
    );
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to search movies');
  }
};
