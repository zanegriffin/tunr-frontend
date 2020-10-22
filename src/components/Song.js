import React from 'react';
import './Song.scss'

export const Song = (props) => {
    
	return (
		<div className='song-body'>	
			<div className='title-artist-time'>
			    <div className='title-artist'>
			        <h3>{props.song.title}</h3>
                    <h5>{props.song.artist}</h5>
			    </div>
                <p>{props.song.time}</p>
			</div>
			<div className='buttons'>
                <button onClick={() => {
                    props.selectSong(props.song);
                    props.history.push('/edit')}}>Edit</button>
				<button onClick={() => {
                    props.deleteSong(props.song);
                }}>Delete</button>
			</div>
		</div>
	);
};