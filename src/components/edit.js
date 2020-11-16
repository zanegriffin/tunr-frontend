import React, {useState} from 'react';

export const Edit = (props) => {
    const [formData, setFormData] = useState(props.song);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData);
        props.history.push('/');
    }
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };
	return (
		<form onSubmit={handleSubmit}>
            <h3>TITLE</h3>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <h3>ARTIST</h3>
            <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
            />
            <h3>TIME</h3>
            <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
            />
            <input type='submit' value={props.label === 'UPDATE SONG' ? props.label : 'ADD NEW SONG'} />
        </form>
	);
};