import { styled } from 'estrela';

const App = () => {
  let name = 'Forasteiro';

  return (
    <div class="app">
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
  );
};

export default styled(App)`
  .app {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-flow: column;
    align-items: center;
    color: #555;

    label {
      font-weight: bold;
      margin: 20px 0 10px;
    }

    input {
      text-align: center;
    }
  }
`;
