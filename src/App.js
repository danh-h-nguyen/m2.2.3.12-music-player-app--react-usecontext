import React from "react";
import { Box } from "@mui/material";

import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import TrackTitle from "./components/TrackTitle";

function App() {
  return (
    <MusicPlayerProvider>
      <Box
        sx={{
          width: 400,
          margin: "auto",
          padding: 2,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
        }}
      >
        <div className="container">
          <TrackTitle />
          <TrackList />
          <Controller />
        </div>
      </Box>
    </MusicPlayerProvider>
  );
}

export default App;
