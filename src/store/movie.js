import { Store } from '../core/movieApp';
import dotenv from 'dotenv';

dotenv.config();

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
  }
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.MOVIE_KEY}&s=${store.state.searchText}&page=${page}`
  );
  const { Search, totalResults } = await res.json();
  store.state.movies = [...store.state.movies, ...Search];

  store.state.pageMax = Math.ceil(Number(totalResults) / 10);
};
