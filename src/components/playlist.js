import './Playlist.scss'
import {Song} from './AddNewSong'

export const Playlist = (props) => {
    return(
        <div className='playlist-body'>
            <h2>Playlist</h2>
            <div className='playlist-panel'>
                <Song />
            </div>
        </div>
    )
}