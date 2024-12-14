import React, { useState } from "react";
import Track1 from "../data/lost-in-dreams-abstract-chill-downtempo-cinematic-future-beats-270241.mp3";
import Track2 from "../data/spinning-head-271171.mp3";
import Track3 from "../data/stylish-deep-electronic-262632.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "lost in dreams",
      file: Track1,
    },
    {
      name: "spinning head",
      file: Track2,
    },
    {
      name: "stylish deep electronic",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
