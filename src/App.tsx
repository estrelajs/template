import { getState } from 'estrela';
import classes from './App.module.css';

export function App() {
  let name = 'Forasteiro';

  return (
    <div class={classes.app}>
      <h1>Welcome {name}!</h1>

      <p>
        This is your startup project. Please, visit Estrela{' '}
        <a href="https://estrelajs.gitbook.io/estrela/" target="_blank">
          docs
        </a>{' '}
        to learn more about it.
      </p>

      <label for="name">Enter your name:</label>
      <input id="name" bind={getState(name)} autocomplete="off" />
    </div>
  );
}
