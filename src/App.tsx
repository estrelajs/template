import { styled } from 'estrela';
import logo from '../favicon.svg';
import { getStarStyle } from './stars';

const App = () => {
  let name = 'Adventurer';

  return (
    <>
      {/* For stars effect */}
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* Template code */}
      <div class="container">
        <img src={logo} width="300" />
        <h1>Welcome {name}!</h1>
        <p>
          This is your startup project. Please, visit Estrela{' '}
          <a href="https://estrelajs.github.io/" target="_blank">
            docs
          </a>{' '}
          to learn more about it.
        </p>

        <label for="name">Enter your name:</label>
        <input id="name" bind={name$} autocomplete="off" />
      </div>
    </>
  );
};

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
