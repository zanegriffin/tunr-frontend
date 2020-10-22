import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Header} from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Favoritesong />
    </div>
  );
}

export default App;
