import { Component } from './core/movieApp';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default class App extends Component {
  render() {
    const header = new TheHeader().el;
    const footer = new TheFooter().el;
    const routerView = document.createElement('router-view');

    this.el.append(header, routerView, footer);
  }
}
