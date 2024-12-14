import React from "react";
import { Box } from "@mui/material";

import useMusicPlayer from "../hooks/usePlayerProvider";

// ======

function TrackTitle() {
  const { currentTrackName } = useMusicPlayer();

  return (
    <Box
      sx={{
        overflow: "hidden", // Ẩn nội dung thừa
        whiteSpace: "nowrap", // Không xuống dòng
        textOverflow: "ellipsis", // Thêm dấu "..." khi không đủ chỗ
        width: "100%", // Đảm bảo container có độ rộng cố định
        display: "flex",
        alignItems: "center",
        height: "50px", // Chiều cao tùy chỉnh
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          animation: "marquee 10s linear infinite", // Hiệu ứng chạy chữ
        }}
      >
        <h2>{currentTrackName || "no track selected"}</h2>
      </Box>
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default TrackTitle;
