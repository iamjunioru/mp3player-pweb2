import React from "react";

export default function TrackInfo({
  data: { name },
  color,
  setCurrentSongIdx,
  idx,
}) {
  return (
    <>
      <h3
        className="h3-album"
      >
        ALBUM:
      </h3>

      <h2
      className="h2-album"
      onClick={() => setCurrentSongIdx(idx)}
      style={{ color, cursor: "pointer" }}
      >{name + idx}</h2>
    </>
  );
}
