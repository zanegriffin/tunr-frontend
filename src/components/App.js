import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Header} from './Header'
import {Playlist} from './Playlist'
import {Favoritesong} from './Favoritesong'
import {Song} from './AddNewSong'

function App() {
  return (
    <div className="App">
      <Header />
      <Playlist />
      <Favoritesong />
      <Song />
    </div>
  );
}

export default App;
