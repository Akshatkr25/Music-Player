import React from "react";

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} />
            <h2 style={{color:"#bf4f7c"}}> {currentSong.name} </h2>
            <h3 style={{color:"#bf4f7c"}}> {currentSong.artist} </h3>
        </div>
    );
};

export default Song; 
