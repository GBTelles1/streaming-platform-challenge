"use server";

import { Video } from "@/app/types";

export async function getVideos() {
  const url = "http://127.0.0.1:3004/videos";

  const videosResponse = await fetch(url, {
    next: { tags: ["videos"] },
  });

  const videos: Video[] = await videosResponse.json();

  // If there are no videos, return an empty list
  if (!videos) {
    return [];
  }

  return videos;
}
