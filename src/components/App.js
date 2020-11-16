import React, {useState, useEffect} from 'react';
import './App.scss';
import {Header} from './Header'
import {Playlist} from './Playlist'
import {Favoritesong} from './Favoritesong'
import {Edit} from './Edit'
// import {AddNewSong} from './AddNewSong'
import { Route, Switch } from 'react-router-dom';

function App() {
  const url =
		'https://tunr-on-rails.herokuapp.com';

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
    fetch(url + '/songs/')
    .then((response) => response.json())
    .then((data) => {
      const faves = data.filter(song => song.is_favorite === true)
      // console.log(faves)
      setFavoriteSongs(faves)
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
    song.is_favorite = !song.is_favorite
    console.log(song.is_favorite)
    fetch(url + '/songs/' + song.id, {
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
    fetch(url + '/songs/' + song.id, {
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
    fetch(url + '/songs/' + song.id, {
      method: 'delete'
    }).then(() => {
      getSongs()
      getFaves()
    });
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
							<Favoritesong
								{...rp}
								favoriteSongs={favoriteSongs}
								selectSong={selectSong}
								deleteSong={deleteSong}
								handleToggle={handleToggle}
							/>
							{/* <AddNewSong song={emptySong} handleSubmit={handleCreate} /> */}
							<div className='new-song-body'>
								<h1>ADD A NEW SONG</h1>
								<div className='input-boxes'>
                  <Edit
								{...rp}
								label='create'
								song={emptySong}
								handleSubmit={handleCreate}
							/>
								</div>
							</div>
							
						</>
					)}
				/>
				<Route
					exact
					path='/edit'
					render={(rp) => (
						<Edit
							{...rp}
							label='UPDATE SONG'
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
