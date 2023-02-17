import { Component } from '../core/movieApp';

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">Search!</button>
      `;

    const inputElement = this.el.querySelector('input');
    inputElement.addEventListener('input', () => {});
    inputElement.addEventListener('keydown', (event) => {
      if ((event.key = 'Enter')) {
      }
    });

    const btnElement = this.el.querySelector('.btn');
    btnElement.addEventListener('click', () => {});
  }
}
