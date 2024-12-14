import React from "react";
import { Box } from "@mui/material";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import useMusicPlayer from "../hooks/usePlayerProvider";

// ======

function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <div>
      {trackList.map((track, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "5px",
            backgroundColor:
              currentTrackName === track.name ? "#e0e0e0" : "transparent",
            borderRadius: "5px",
          }}
        >
          <span
            style={{
              fontWeight: currentTrackName === track.name ? "bold" : "normal",
            }}
          >
            {track.name}
          </span>

          <Box onClick={() => playTrack(index)} className="track-button">
            {currentTrackName === track.name && isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayArrowIcon />
            )}
          </Box>
        </div>
      ))}
    </div>
  );
}

export default TrackList;
