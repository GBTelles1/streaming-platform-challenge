"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";
import videojs from "video.js";

const VideoPlayer = dynamic(() =>
  import("../../../components/VideoPlayer").then((mod) => mod.VideoPlayer)
);

export const VideoWrapper = ({ videoSrc }) => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    height: 300,
    sources: [
      {
        src: videoSrc,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </Suspense>
  );
};
