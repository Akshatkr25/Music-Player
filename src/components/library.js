import React from 'react'
import LibrarySong from './librarySong';

const library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs,libraryStatus }) => {

    const myStyle = {
        color: "whitesmoke",
        fontFamily: "monospace",
        fontSize: "1.8rem"
      };
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h2 style={myStyle}>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                     songs ={songs}
                     setCurrentSong={setCurrentSong}
                     song={song}
                     id={song.id}
                     key={song.id}
                     audioRef = {audioRef}
                     isPlaying = {isPlaying}
                     setSongs = {setSongs} />
                ))}
            </div>
        </div>
    );
};

export default library;
