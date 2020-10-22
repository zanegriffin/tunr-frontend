import React from 'react';

export const Song = (props) => {
	return (
        <div>
            <p onClick={() => props.handleToggle(props.song)}>{props.song.title}</p>
        </div>
    );
};