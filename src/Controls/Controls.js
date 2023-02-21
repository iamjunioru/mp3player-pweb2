import React, { useState, useEffect } from "react";
import "./Controls.css";
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Controls({
  handleNextSong,
  handlePrevSong,
  handlePlay,
  handlePause,
  audioRef,
}) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const handleUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener("timeupdate", handleUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleUpdate);
    };
  }, [audioRef]);

  const bar = (currentTime, duration) => {
    if (!audioRef.current || isNaN(duration)) {
      return null;
    }
    return <Bar currentTime={currentTime} duration={duration} />;
  };

  return (
    <div className="player-container">
      <div className="player-controls">
        <button className="prev-button" onClick={handlePrevSong}><FontAwesomeIcon icon={faBackward} /></button>
        <button className="play-button" onClick={handlePlay}><FontAwesomeIcon icon={faPlay} /></button>
        <button className="pause-button" onClick={handlePause}><FontAwesomeIcon icon={faPause} /></button>
        <button className="next-button" onClick={handleNextSong}><FontAwesomeIcon icon={faForward} /></button>
        <span className="progress-bar">{bar(currentTime, audioRef.current?.duration)}</span>
      </div>
    </div>
  );
}

function Bar({ currentTime, duration }) {
  const formatTime = (time) => {
    if (isNaN(time)) {
      return "00:00";
    }
    const seconds = Math.floor(time % 60);
    return `${seconds < 10 ? "00:0" : "00:"}${seconds}`;
  };

  return (
    <div className="bar">
      <div className="bar__progress" style={{ width: `${(currentTime / duration) * 100}%` }} />
      <div className="bar__time">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
