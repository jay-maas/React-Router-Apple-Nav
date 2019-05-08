import React from 'react';
import Icon from './Assets/svgImages/svgIndex';
import './App.css';

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={styles}>
        <Icon name="watchOsLogo" fill={"white"}
        width={100}
        />
      </div>
        <p>
          Welcome to my CRA Apple Nav Stretch Project
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
