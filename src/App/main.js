import React from 'react';
import Header from '../components/Header';
import List from '../components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <a href="link to something" rel="noreferrer" target="_blank" className="App-link">
        Go to the Real Factor_
      </a>
    </div>
  );
}

export default App;
