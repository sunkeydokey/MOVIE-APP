import { Store } from '../core/movieApp';

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo:
    'https://img.freepik.com/free-vector/cute-duotone-cat-logo_23-2149440684.jpg?w=740&t=st=1676963054~exp=1676963654~hmac=30824b4998536bdc22ee667d6586c0d974dc9a98be33305f552791324cb15af8',
  name: 'sunkeydokey / LeeSunKee',
  email: 'sunkeydokey@gmail.com',
  blog: 'https://velog.io/@sunkeydokey',
  github: 'https://github.com/sunkeydokey',
  repository: 'https://github.com/sunkeydokey/MOVIE-APP',
});
