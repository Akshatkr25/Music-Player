import React from "react";

const librarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, id, setSongs }) => {

    const songSelectHandler = async () => {
        await setCurrentSong(song);
        // add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        // check if the song is playing
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}>

            <img src={song.cover} alt={song.name} />
            <div className="song-discription">
                <h3> {song.name} </h3>
                <h4> {song.artist} </h4>
            </div>
        </div>
    );
};

export default librarySong; 
