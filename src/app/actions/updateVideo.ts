"use server";

import { Video } from "@/app/types";
import { revalidateTag } from "next/cache";

export async function updateVideo(videoToUpdate: Video) {
  const url = `http://127.0.0.1:3004/videos/${videoToUpdate.id}`;

  const videoResponse = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(videoToUpdate),
  });

  const updatedVideo: Video = await videoResponse.json();

  revalidateTag(`video-${videoToUpdate.id}`);

  return updatedVideo;
}
