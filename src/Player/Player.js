import React, { useState, useEffect, useRef } from "react";
import Controls from "../Controls/Controls";
import TrackInfo from "../TrackInfo/TrackInfo";
import Audio from "../Audio/Audio";
import "./Player.css";

function Player({ tracks }) {
  const [currentSongIdx, setCurrentSongIdx] = useState(-1);
  const audioRef = useRef();

  function handleNextSong() {
    setCurrentSongIdx((curr) =>
      curr + 1 === tracks.length ? 0 : curr + 1
    );
  }
  function handlePrevSong() {
    setCurrentSongIdx((curr) =>
      curr - 1 < 0 ? tracks.length - 1 : curr - 1
    );
  }

  function handlePlay() {
    audioRef.current.play();
  }

  function handlePause() {
    audioRef.current.pause();
  }


  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("canplay", handlePlay);
    return () => audio.removeEventListener("canplay", handlePlay);
  }, []);

  console.log(tracks);
  return (
    <div>
      <h4 className="som-atual">SOM ATUAL:</h4>
      <h5>{tracks && tracks[currentSongIdx]?.name}</h5>
      <Controls
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
        handlePlay={handlePlay}
        handlePause={handlePause}
        audioRef={audioRef}
      />
      <div>
        {tracks?.map(({ name }, idx) => (
          <TrackInfo
            key={name + idx}
            color={idx === currentSongIdx ? "#1db954" : "gray"}
            data={{ name }}
            setCurrentSongIdx={setCurrentSongIdx}
            idx={idx}
          />
        ))}
      </div>
      <Audio src={tracks && tracks[currentSongIdx]?.src} audioRef={audioRef} />
    </div>
  );
}

export default Player;
