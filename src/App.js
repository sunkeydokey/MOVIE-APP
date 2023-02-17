import { Component } from './core/movieApp';

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view');

    this.el.append(routerView);
  }
}
