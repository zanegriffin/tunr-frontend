import React from 'react';

export const Song = (props) => {
	return (
        <div>
            <p>{props.song.title}</p>
        </div>
    );
};