import React, { useState } from "react";
import "./TrackInfo.css";

export default function TrackInfo({
  data: { name },
  color,
  setCurrentSongIdx,
  idx,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelectSong = () => {
    setCurrentSongIdx(idx);
    setActiveIndex(idx);
  };

  return (
    <div
      className={`div-album ${activeIndex === idx ? "active" : ""}`}
      onClick={handleSelectSong}
    >
      <h3 className="h3-album">ALBUM</h3>

      <h2
        className="h2-album"
        style={{ color, cursor: "pointer" }}
      >
        {name}
      </h2>
    </div>
  );
}
