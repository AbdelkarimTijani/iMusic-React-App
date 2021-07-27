import React, {useState, useRef } from "react";
import Library from "./Components/Library";
//importing components
import Player from "./Components/Player";
import Song from "./Components/Song";
import Nav from "./Components/Nav";
//importing styles
import "./styles/app.scss";
//Importing Data
import Data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  //States
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
   //States
   const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
});
  const [libraryStatus, setLibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration: duration});
}
const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex+1) % songs.length]);
  if(isPlaying) audioRef.current.play();       
}

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
      audioRef={audioRef}
      currentSong={currentSong} 
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs = {songs}
      setCurrentSong= {setCurrentSong}
      setSongs={setSongs}
      />
      <Library audioRef={audioRef}
       isPlaying={isPlaying}
       songs= {songs}
       setSongs={setSongs} 
       setCurrentSong={setCurrentSong}
       libraryStatus= {libraryStatus}
        />
      <audio
             onTimeUpdate={timeUpdateHandler}
             ref={audioRef} 
             src={currentSong.audio}
             onEnded={songEndHandler}
             >
            </audio>
    </div>
  );
}

export default App;
