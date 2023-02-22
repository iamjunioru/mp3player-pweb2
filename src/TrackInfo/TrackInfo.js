import React, { useEffect } from "react";
import "./TrackInfo.css";

export default function TrackInfo({
  data: { name },
  color,
  setCurrentSongIdx,
  idx,
}) {
  useEffect(() => {
    document.getElementsByClassName("div-album")[0].classList.add("active");
  }, []);

  const handleSelectSong = () => {
    setCurrentSongIdx(idx);
    const divs = document.getElementsByClassName("div-album");
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove("active");
    }
    document.getElementsByClassName("div-album")[idx].classList.add("active");
  };

  return (
    <div className={`div-album`} onClick={handleSelectSong}>
      <h3 className="h3-album">ALBUM</h3>

      <h2 className="h2-album" style={{ color, cursor: "pointer" }}>
        {name}
      </h2>
    </div>
  );
}
