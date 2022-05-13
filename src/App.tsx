import { signal, styled } from 'estrela';

import logo from '../favicon.svg';
import { getStarStyle } from './stars';

function App() {
  const name = signal('Adventurer');

  return (
    <>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div class="container">
        <img src={logo} width="300" />
        <h1>Welcome {name()}!</h1>
        <p>
          This is your startup project. Please, visit Estrela{' '}
          <a href="https://estrelajs.github.io/" target="_blank">
            docs
          </a>
          &nbsp;to learn more about it.
        </p>

        <label for="name">Enter your name:</label>
        <input id="name" bind={name} autocomplete="off" />
      </div>
    </>
  );
}

export default styled(App)`
  ${getStarStyle()}

  .container {
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;

    label {
      font-weight: bold;
      margin: 20px 0 10px;
    }

    img {
      filter: brightness(0.75);
      margin: 50px;
      z-index: 1;
    }

    input {
      text-align: center;
    }
  }
`;
