import React from 'react';
import './Playlist.scss'
import {Song} from './Song'

export const Playlist = (props) => {
    const {songs} = props;
    const loaded = () => (
			<div className='playlist-body'>
				<h2>Playlist</h2>
				<div className='playlist-panel'>
					{songs.map((song) => (
						<Song song={song} selectSong={props.selectSong} deleteSong={props.deleteSong} history={props.history} />
					))}
				</div>
			</div>
		);
    const loading = <h1>Loading...</h1>
    return songs.length > 0 ? loaded() : loading;
}