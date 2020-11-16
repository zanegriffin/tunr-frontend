import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'

export const Song = (props) => {
    
	return (
		<div className='song-body'>
			<div className='title'>
				<h3 onClick={() => {
					props.selectSong(props.song);
					props.history.push('/edit');
				}}>{props.song.title}</h3>
				<p>{props.song.time}</p>
			</div>
			<div className='buttons'>
			<h5>{props.song.artist}</h5>
				<div
					onClick={() => {
						props.deleteSong(props.song);
					}}>
					X
				</div>
				<div onClick={() => props.handleToggle(props.song)}>
					{props.song.is_favorite ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartRegular} />}
				</div>
			</div>
		</div>
	);
};