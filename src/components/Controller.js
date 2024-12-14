import React from "react";
import { Box } from "@mui/material";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import useMusicPlayer from "../hooks/usePlayerProvider";
import "../index.css";

// ======

function Controller() {
  const {
    playNextTrack,
    playPreviousTrack,
    isPlaying,
    currentTrackIndex,
    playTrack,
  } = useMusicPlayer();

  return (
    <div className="icon-container">
      <SkipPreviousIcon
        onClick={playPreviousTrack}
        className="icon-button icon-button--default"
      ></SkipPreviousIcon>

      <Box
        onClick={() => playTrack(currentTrackIndex)}
        className={`icon-button ${
          isPlaying ? "icon-button--pause" : "icon-button--play"
        }`}
      >
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </Box>

      <SkipNextIcon
        onClick={playNextTrack}
        className="icon-button icon-button--default"
      ></SkipNextIcon>
    </div>
  );
}

export default Controller;
