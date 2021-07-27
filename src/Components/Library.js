import React from 'react';
import Librarysong from './LibrarySong';

const Library = ({songs, setCurrentSong,isPlaying, audioRef, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
        <h2>Library</h2>
        {songs.map((song => <Librarysong
         id={song.id} 
         songs={songs}
         setCurrentSong={setCurrentSong}
         song={song}
         key={song.id}
         audioRef={audioRef}
         isPlaying={isPlaying}
         setSongs={setSongs}
         />))}
        </div>
    );
};

export default Library;