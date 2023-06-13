export const getTrendingMovies = async () => {
  try {
    const responce = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=104cb1f11a5d6d55ba8d6504d9bd060a`
    );
    const data = await responce.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch trending movies');
  }
};
