import { Component } from '../core/movieApp';
import movieStore, { searchMovies } from '../store/movie';

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">Search!</button>
      `;

    const inputElement = this.el.querySelector('input');

    inputElement.addEventListener('input', () => {
      movieStore.state.searchText = inputElement.value;
    });

    inputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const btnElement = this.el.querySelector('.btn');
    btnElement.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
