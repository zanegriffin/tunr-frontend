import './AddNewSong.scss'

export const AddNewSong = (props) => {
    return(
        <div>
            <h1>ADD A NEW SONG</h1>
            <h3>TITLE</h3>
            <input type='text'/> <br/>
            <h3>ARTIST</h3>
            <input type='text'/> <br/>
            <h3>TIME</h3>
            <input type='text'/> <br/>
            <button>ADD A NEW SONG</button>
        </div>
    )
}