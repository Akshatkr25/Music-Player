import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const nav = ({libraryStatus, setLibraryStatus}) => {
    const myStyle = {
        color: "#6a1b9a",
        fontFamily: " Georgia, Arial and Helvetica",
      };
    return (
        
        <nav>
            <h1 style={myStyle}>Melody Magic</h1>
            <button style={{fontFamily: "cursive"}} onClick={() => setLibraryStatus(!libraryStatus,)}>
                Library 
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}
export default nav;
