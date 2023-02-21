import React, { useState, useEffect } from "react";
import "./Controls.css";

export default function Controls({
  handleNextSong,
  handlePrevSong,
  handlePlay,
  handlePause,
  audioRef,
}) {
  const [perc, setPerc] = useState(0);
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
    return <Bar currentTime={currentTime} duration={duration} />;
  };

  return (
    <div className="player-controls">
      <button className="play-button" onClick={handlePlay}>PLAY</button>
      <button className="pause-button" onClick={handlePause}>PAUSE</button>
      <button className="next-button" onClick={handleNextSong}>NEXT</button>
      <button className="prev-button" onClick={handlePrevSong}>BACK</button>
      <span className="progress-bar">{bar(currentTime, audioRef.current.duration)}</span>
    </div>
  );
}

function Bar({ currentTime, duration }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="bar">
      <div
        className="bar__progress"
        style={{ width: `${(currentTime / duration) * 100}%` }}
      />
      <div className="bar__time">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
