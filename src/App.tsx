import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props: {onButtonClick?: () => void}) => {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id={'button-id'} onClick={() => setValue(3)}>buttonText</button>
        <div id={'value-id'}>{value}</div>
      </header>
    </div>
  );
}

export default App;
