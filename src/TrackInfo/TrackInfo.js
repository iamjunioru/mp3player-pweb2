import React from "react";
import "./TrackInfo.css";

export default function TrackInfo({
  data: { name },
  color,
  setCurrentSongIdx,
  idx,
}) {
  return (
    <>
      <div className="div-album">
        <h3 className="h3-album">ALBUM:</h3>

        <h2
          className="h2-album"
          onClick={() => setCurrentSongIdx(idx)}
          style={{ color, cursor: "pointer" }}
        >
          {name + idx}
        </h2>
      </div>
    </>
  );
}
