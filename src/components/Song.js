import React from 'react';

export const Song = (props) => {
    
	return (
		<div>
			<div>
				<h3 onClick={() => props.handleToggle(props.song)}>{props.song.title}</h3>
				<div>
                    <button onClick={() => {
                        props.selectSong(props.song);
                        props.history.push('/edit');}}>Edit</button>
					<button onClick={() => {
                        props.deleteSong(props.song);
                    }}>Delete</button>
				</div>
			</div>
			<h5>{props.song.artist}</h5>
			<p>{props.song.time}</p>
		</div>
	);
};