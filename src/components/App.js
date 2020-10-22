import React, {useState, useEffect} from 'react';
import './App.scss';
import {Header} from './Header'
import {Playlist} from './playlist'
import {Favoritesong} from './Favoritesong'
import {Edit} from './Edit'
import {AddNewSong} from './AddNewSong'
import { Route, Switch } from 'react-router-dom';

function App() {
  const url =
		'https://tunr-backend-rubicon.herokuapp.com';

  const [songs, setSongs] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  const emptySong = {
    title: '',
    time: '',
    artist: '',
    isFavorite: false,
  }

  const [selectedSong, setSelectedSong] = useState(emptySong);
  
  const getSongs = () => {
    fetch(url + '/songs/')
    .then((response) => response.json())
    .then((data) => {
      setSongs(data);
    });
  };

  const getFaves = () => {
    fetch(url + '/songs/favorites/')
    .then((response) => response.json())
    .then((data) => {
      setFavoriteSongs(data);
    });
  };

  useEffect(() => {
    getSongs();
    getFaves();
  },[]);

  const handleCreate = (newSong) => {
    fetch(url + '/songs/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSong)
    }).then((response) => getSongs());
  };

    //changes isFavorite = !isFavorite
  const handleToggle = (song) => {
    console.log('toggle', song)
    fetch(url + '/songs/favorites/' + song._id, {
      method: 'put', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(song)
    }).then(() => {
      getFaves()
      getSongs()
    })
  }

  const handleUpdate = (song) => {
    fetch(url + '/songs/' + song._id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(song)
    }).then(() => getSongs());
  };

  const selectSong = (song) => {
    setSelectedSong(song);
  };

  const deleteSong = (song) => {
    fetch(url + '/songs/' + song._id, {
      method: 'delete'
    }).then(() => getSongs());
  };

  return (
		<div className='App'>
			<Header />
			<Switch>
				<Route
					exact
					path='/'
					render={(rp) => (
						<>
							<Playlist
								{...rp}
								songs={songs}
								selectSong={selectSong}
								deleteSong={deleteSong}
								handleToggle={handleToggle}
							/>
							<Favoritesong {...rp} favoriteSongs={favoriteSongs} />
							<AddNewSong song={emptySong} handleSubmit={handleCreate} />
						</>
					)}
				/>
				<Route
					exact
					path='/edit'
					render={(rp) => (
						<Edit
							{...rp}
							label='update'
							song={selectedSong}
							handleSubmit={handleUpdate}
						/>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
