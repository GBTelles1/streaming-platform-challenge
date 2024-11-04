"use server";

import { Video } from "@/app/types";

export async function getVideoById(videoId: number) {
  const url = `http://127.0.0.1:3004/videos/${videoId}`;

  const videoResponse = await fetch(url, {
    next: { tags: [`video-${videoId}`] },
  });

  const video: Video = await videoResponse.json();

  return video;
}
