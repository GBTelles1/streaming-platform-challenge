"use server";
import { getVideoById } from "@/app/actions";
import { Video } from "@/app/types";

export const viewVideo = async (videoViewed: Video) => {
  const updatedVideo: Video = {
    ...videoViewed,
    views: videoViewed.views + 1,
  };

  const url = `http://127.0.0.1:3004/videos/${updatedVideo.id}`;

  const videoResponse = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedVideo),
  });

  const videoJson: Video = await videoResponse.json();

  const video = await getVideoById(Number(videoJson.id));

  return video;
};
