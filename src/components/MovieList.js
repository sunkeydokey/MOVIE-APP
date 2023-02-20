import { Component } from '../core/movieApp';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe('movies', () => {
      this.render();
    });
  }

  render() {
    this.el.classList.add('movie-list');
    this.el.innerHTML = /* html */ `
        <div class="movies"></div>
        `;

    const moviesElement = this.el.querySelector('.movies');
    moviesElement.append(
      ...movieStore.state.movies.map((movie) => new MovieItem({ movie }).el)
    );
  }
}