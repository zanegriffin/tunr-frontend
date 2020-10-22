import React from 'react'
import './AddNewSong.scss'

export const AddNewSong = (props) => {
    return(
        <div className='new-song-body'>
            <h1>ADD A NEW SONG</h1>
            <div className='input-boxes'>
                <h3>TITLE</h3>
                <input type='text'/> <br/>
                <h3>ARTIST</h3>
                <input type='text'/> <br/>
                <h3>TIME</h3>
                <input type='text'/> <br/>
            </div>
            <button>ADD A NEW SONG</button>
        </div>
    )
}