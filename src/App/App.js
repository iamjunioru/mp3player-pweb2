import React, { useState, useEffect } from 'react'
import Player from "../Player/Player"




const API_KEY = "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4";
const URL_top = "https://api.napster.com/v2.2/artists/art.242214194/tracks/top";
// "https://api.napster.com/v2.2/artists/art.242214194/tracks/top";
// const URL_genres = "https://api.napster.com/v2.2/genres";

const App = () => {

    const [tracks, setTracks] = useState([])
   
    useEffect(() => {
      fetchNapster();
  
      async function fetchNapster() {
        const res = await fetch(URL_top, {
          headers: {
            apikey: API_KEY
          }
        });
        const data = await res.json();
        console.log("DATA", data)
        setTracks(
          data.tracks?.map(({ name, previewURL: src }) => ({ name, src }))
        );
      }
    }, []);
    return (
      <div className="App">
        <Player tracks={tracks} />
      </div>
    );    
}


export default App
