"use server";
import { Video } from "@/app/types";

export const shareVideo = async (video: Video) => {
  const videoUrl = `/videoView/${video.id}`;
  await navigator.clipboard.writeText(videoUrl);
};
